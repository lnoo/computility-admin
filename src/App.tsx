import VTitle from './components/visual-ui/title'
import VHeading from './components/visual-ui/heading'
import Env from './components/env'
import PowerUsage from './components/powerUsage'
import UserSource from './components/userSource'
import NetworkStatus from './components/networkStatus'
import styles from './App.module.scss'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={styles.container}>
        <VHeading content='公共算力运营平台' />
        <div className={styles.main}>
          <div className={styles.left}>
            <div className={styles.top}>
              <div className={styles.topLeft}>
                <VTitle content='机房环境监控' />
                <Env className={styles.env} />
                <VTitle content='能耗概览' />
                <PowerUsage className={styles.powerUsage} />
                <VTitle content='租户资源' />
                <UserSource className={styles.userSource} />
              </div>
              <div className={styles.topCenter}>
              </div>
              <div className={styles.topRight}>
                <VTitle content='集群网络状态' size={.9} />
                <NetworkStatus className={styles.network} />
                <VTitle content='RDMA网络流量 TOP5' size={.9} />
                <div className={styles.rdma}>
                </div>
                <VTitle content='互联网与专线网络流量' size={.9} />
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
