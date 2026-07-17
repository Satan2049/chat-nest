import { DesktopShell } from "./shell/DesktopShell";
import { TitleBar } from "./shell/TitleBar";
import { OnboardingModal } from "./shared/components/OnboardingModal";
import { useAppBootstrap } from "./shared/hooks/useAppBootstrap";
import { useTauriFullscreen } from "./shared/hooks/useTauriFullscreen";
import { useLocaleStore } from "./shared/i18n/localeStore";
import { isTauri } from "./shared/lib/tauriWindow";

export function App() {
  const { theme, setTheme } = useAppBootstrap();
  const onboardingComplete = useLocaleStore((s) => s.onboardingComplete);
  const fullscreen = useTauriFullscreen();

  const content = (
    <>
      <DesktopShell theme={theme} onThemeChange={setTheme} />
      {!onboardingComplete ? <OnboardingModal /> : null}
    </>
  );

  if (!isTauri()) {
    return content;
  }

  return (
    <div className={`desktop-root${fullscreen ? " desktop-root--fullscreen" : ""}`}>
      {!fullscreen ? <TitleBar /> : null}
      <div className="desktop-content">{content}</div>
    </div>
  );
}
