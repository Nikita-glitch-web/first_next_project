import { UpdateProfile } from "../components/UserCabinet/UserCabinet";
import style from "../components/UserCabinet/UserCabinet.module.css"

export default function UserCabinet() {
  return (
    <div className={style.profile_wrapper}>
      <UpdateProfile />
    </div>
  );
}
