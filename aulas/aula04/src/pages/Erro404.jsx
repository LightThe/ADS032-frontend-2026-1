import error from "../assets/PAGERROR.GIF";
import network from "../assets/LINK.GIF";
import "./Erro404.css";

export default function Erro404() {
  return (
    <>
      <header>
        <img src={error} alt="Erro 404" />
        <h1>The page cannot be displayed</h1>
      </header>
      <p>
        The page you are looking for is currently unavailable. The Web site
        might be experiencing technical difficulties, or you may need to adjust
        your browser settings.
      </p>
      <section>
        <img src={network} alt="Problemas de conectividade" />
        <p>
          To attempt fixing network connectivity problems, click Tools, and then
          click "Diagnose Connection Problems..."
        </p>
      </section>
      <p>Other options to try:</p>
      <ul>
        <li>Click the Refresh button, or try again later.</li>
        <li>
          If you typed the page address in the Address bar, make sure that it is
          spelled correctly.
        </li>
        <li>
          To check your connection settings, click the Tools menu, and then
          click Internet Options. On the Connections tab, click Settings. The
          settings should match those provided by your local area network (LAN)
          administrator or Internet service provider (ISP).
        </li>
        <li>
          See if your Internet connection settings are being detected. You can
          set Microsoft Windows to examine your network and automatically
          discover network connection settings (if your network administrator
          has enabled this setting).
        </li>
      </ul>
    </>
  );
}
