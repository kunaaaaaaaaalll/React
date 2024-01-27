import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    const [connStatus, setConnStatus] = useState(true);
    useEffect(() => {
        window.addEventListener("offline", () => {
            setConnStatus(false);
        });
        window.addEventListener("online", () => {
            setConnStatus(true);
        });
    }, []);
    return connStatus;
}

export default useOnlineStatus;