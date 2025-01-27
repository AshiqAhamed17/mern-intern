const TrackButtonComp = (Component) => {
    return (props) => {
        console.log("HoC tracking comp");
        const handleClick = () => {
            console.log("Logged in Fetch the Tracking Info",props.trackingInfo);
        }
        return (
            <div onClick={handleClick}>
                <input />
                <Component {...props}/>
            </div>
        )
    }
}

export default TrackButtonComp;