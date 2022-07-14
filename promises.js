const loginUserPromise = (email, password)=>{
    return new Promise((resolve, reject) => {
        const error = false

        if(error){
            reject(new Error('error in login'));
        }

        console.log('user logged');
        resolve({email});

    })
}

const getUserVideos = (email) => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            console.log('getUserVideos')
            resolve(['video 1, video 2, video 3'])
        }, 2000)
    })
}

const getVideosDetails = (video) => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            console.log('getVideosDetails')
            resolve({title: "video title"})
        }, 3000)
    })
}

loginUserPromise( 'marcelodev@gmail.com',
'123456')
    .then((user) => { return getUserVideos(user.email)})
    .then((video) => { return getVideosDetails(video[0])})
    .then((videoDetails) => {return console.log({videoDetails})})
    .catch((error) => { console.log({error})})
