import styles from './styles.module.css';

type Streaming = {
  logo: {
    url: string;
  },
  name: string,
  url: string
}

type Props = {
  streaming: Streaming[]
}

const StreamingList = ({streaming}: Props) => {
  return (
    <>
      <p className={styles.streamingTitle}>Смотреть на:</p>
      <ul className={styles.streamingList}>
        {streaming && streaming.length > 0 ? (
          streaming?.map((item) => {
            return (
              <li key={item.url}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className={styles.logo}
                    src={item.logo.url}
                    alt={item.name}
                  />
                </a>
              </li>
            );
          })
        ) : (
          <p className={styles.noInfo}>
            Нет информации о видеостримингах
          </p>
        )}
      </ul>
    </>
  );
};

export default StreamingList;
