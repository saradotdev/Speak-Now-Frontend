import React, { useEffect } from "react";

export default function VideoInput(props) {
    const { width, height } = props;

    const inputRef = React.useRef();

    // eslint-disable-next-line
    const [vidName, setVidName] = React.useState();
    const [source, setSource] = React.useState();

    // eslint-disable-next-line
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setVidName(file.name);

        const url = URL.createObjectURL(file);
        setSource(url);
        props.vid_load(true);
        props.set_vid(url);
    };

    // eslint-disable-next-line
    const handleChoose = (event) => {
        inputRef.current.click();
    };

    const canPlay = (e) => {
        if (props.set_vid_duration != null) {
            var vid = document.getElementsByClassName("VideoInput_video")[0];
            props.set_vid_duration(vid.duration);
        }
    };

    useEffect(() => {
        if (props.source !== null) {
            setSource(props.source);
        }
    }, []); // eslint-disable-line

    return (
        <div className="VideoInput">
            {source && (
                <video
                    className="VideoInput_video"
                    width={width}
                    height={height}
                    controls
                    src={source}
                    onCanPlay={canPlay}
                />
            )}
        </div>
    );
}
