export default () => {
    let video = document.querySelector('.page-main__video-item');
    let videoContaier = document.querySelector('.page-main__video-wrapper');
    let videoWidth = videoContaier.offsetWidth;
    let videoButton = document.querySelector('.page-main__video-control');


    if (videoWidth < 1024) {
        video.removeAttribute('autoplay');
        videoButton.onclick = function () {
            if (video.classList.contains('paused')) {
                video.classList.remove('paused')
                video.play();
                videoButton.classList.remove('page-main__video-control--play');
                videoButton.classList.add('page-main__video-control--pause');
            } else {
                video.classList.add('paused');
                video.pause();
                videoButton.classList.add('page-main__video-control--play');
                videoButton.classList.remove('page-main__video-control--pause');
            }
        }
    }
}



