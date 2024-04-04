import React, { useEffect } from "react";

export default function VideoInput(props) {
  const { width, height } = props;
  
  const inputRef = React.useRef();

  const [vidName, setVidName] = React.useState();
  const [source, setSource] = React.useState();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setVidName(file.name);
    
    const url = URL.createObjectURL(file);
    setSource(url);
    props.vid_load(true);
    props.set_vid(url);
  };

  const handleChoose = (event) => {
    inputRef.current.click();
  };

  const canPlay = (e) => {
    if (props.set_vid_duration != null){
      var vid = document.getElementsByClassName('VideoInput_video')[0];
      console.log(vid.duration);
      props.set_vid_duration(vid.duration);
    }
  }

  useEffect(() => {
    if (props.source !== null) {
      setSource(props.source);
    }
  }, [])
  
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
