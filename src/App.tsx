import VTitle from './components/visual-ui/title'
import VHeading from './components/visual-ui/heading'
import styles from './App.module.scss'
import Button from '@mui/material/Button';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className={styles.container}>
        <VHeading content='公共算力运营平台' />
        <div className={styles.main}>
          <div className={styles.left}>
            <div className={styles.top}>
              <div className={styles.topLeft}>
                <VTitle content='机房环境监控' />
                <div className={styles.env}>
                  <Button variant="contained">Hello world</Button>
                </div>
                <VTitle content='能耗概览' />
                <div className={styles.powerUsage}>
                </div>
                <VTitle content='租户资源' />
                <div className={styles.userSource}>
                </div>
              </div>
              <div className={styles.topCenter}>
              </div>
              <div className={styles.topRight}>
                <VTitle content='集群网络状态' />
                <div className={styles.network}>
                </div>
                <VTitle content='RDMA网络流量 TOP5' />
                <div className={styles.rdma}>
                </div>
                <VTitle content='互联网与专线网络流量' />
                <div className={styles.stream}>
                </div>
              </div>
            </div>
            <div className={styles.bottom}>
              <VTitle content='集群监控' />
              <div className={styles.cluster}>

              </div>
            </div>

          </div>
          <div className={styles.right}>
            <VTitle content='当前警告' />
            <div className={styles.warning}>

            </div>
            <VTitle content='当前工单' />
            <div className={styles.workOrder}>

            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
