import { useEffect, useRef } from "react"
import styles from '../../../styles/Elements.module.css'

const videoId = "l0hPt-bsJMk"

export const YTvideos = ({video}) => { 
    const playerRef = useRef(null)

    useEffect(() => {
        // Cargar el reproductor de YouTube
        const tag = document.createElement('script')
        tag.src = 'https://www.youtube.com/iframe_api'
        const firstScriptTag = document.getElementsByTagName('script')[0]
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

        window.onYouTubeIframeAPIReady = () => {
            new window.YT.Player(playerRef.current, {
                videoId: videoId,
            })
        }
        return () => {
            window.onYouTubeIframeAPIReady = null
        }
    }, [])

    const pauseVideo = () => {
        if (playerRef.current) {
            playerRef.current.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
        }
    }


    return ( 
        <div className={styles.youtube} onMouseLeave={pauseVideo}>
            <iframe
                ref={playerRef}
                width="350"
                height="200"
                src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
        </div>
    )
}