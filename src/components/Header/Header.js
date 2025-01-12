import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

import Container from '@components/Container';
import LogoCloudyCam from '@components/LogoCloudyCam';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        <p className={styles.headerTitle}>
          <Link href="/">
            <a className={styles.headerLogo}>
              <LogoCloudyCam />
              <span className="sr-only">CloudyCam</span>
            </a>
          </Link>
        </p>
        <ul className={styles.headerLinks}>
          <li>
            <a href="https://github.com/colbyfayock/cloudycam">
              <FaGithub /> CloudyCam on GitHub
            </a>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
