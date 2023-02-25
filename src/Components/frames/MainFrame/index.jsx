import React from 'react';
import style from './frames.module.scss'
const MainFrame = () => {

    return (
        <div className={style.banner_1}>
            <div className={style.video}>
                <video src="video_1.mp4" loop autoPlay muted  />
            </div>

            <div className={style.content}>
                <h1>
                    ДРОНЫ В СЕЛЬСКОМ ХОЗЯЙСТВЕ
                </h1>
            </div>
        </div>
    );
};

export default MainFrame;