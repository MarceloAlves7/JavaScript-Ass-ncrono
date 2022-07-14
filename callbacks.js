const loginUser = (email, password, onSuccess, onError) => {
    setTimeout(() =>{
        const error = false

        if(error){
            return onError(new Error('error in login'))
        }

        console.log('user logged')
        onSuccess({email})
    }, 1500)
    
    
} 

const getUserVideos = (email, callback) => {
    setTimeout(()=>{
        callback(['video 1, video 2, video 3'])
    }, 2000)
}

const getVideosDetails = (video, callback)=>{
    setTimeout(()=>{
        callback({title: "video title"})
    }, 3000)
}

const user = loginUser(
    'marcelodev@gmail.com',
    '123456', 
    (user)=>{
        getUserVideos(user.email, (videos)=>{
            console.log({videos});
            getVideosDetails(videos[0], (videoDetails)=>{
                console.log({videoDetails})
            })
    })},
    (error)=>{console.log({error})}
)


