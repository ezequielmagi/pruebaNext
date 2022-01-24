import '../styles/global.css'

export default function App({component, pageProps}) {
  return <component { ...pageProps }/>
}
