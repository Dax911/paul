import { useRouter } from "next/router";
import useSWR from "swr";
import styles from "./index.module.css";
const fetcher = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

export default function User() {
  const { query } = useRouter();
  const { data, error } = useSWR(
    () => query.id && `https://api.getmoonbounce.com/api/v3/user/${query.id}`,
    fetcher
  );

  if (error) return <div>{error.message}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <div className={styles.modalbox}>
        <div className={styles.headerbox}>
          <div className={styles.imagebox}>
              <img src={data.profile_picture} className={styles.image}/>
          </div>
          <div className={styles.titlebox}>
            <div className={styles.nametext}>
              <span>{data.username}</span>
            </div>
            <div className={styles.idtext}>
              <span>USER ID: {data.user_id}</span>
              <br />
              <span>STATE: {data.state}</span>
              <br />
              <span>STAGE ID: {data.stage_id}</span>
              <br />
              <span>COLORS: {data.colors}</span>
              <br />
              <span>BADGES: {data.badges}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
