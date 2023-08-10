import { useEffect } from "react"

export interface IProps {}

const AdBanner = (props: IProps) => {
  useEffect(() => {
    try {
      ;((window as any).adsbygoogle = (window as any).adsbygoogle || []).push(
        {},
      )
    } catch (err) {
      console.log(err)
    }
  }, [])

  return (
    <ins
      className="adsbygoogle adbanner-customize"
      style={{
        display: "block",
        overflow: "hidden",
      }}
      data-ad-client="ca-pub-6335200820164528"
      {...props}
    />
  )
}
export default AdBanner
