import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styeles.module.css';
import { useState, useEffect } from 'react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>('dark');

  function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault(); // Não segue o link
   

    setTheme(prevTheme=>{
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme
    })
    
  }
  //  useEffect(()=>{
  //   console.log('useEffect sem dependências',Date.now());
  // });//Executado em toda renderização

  //  useEffect(()=>{
  //   console.log('useEffect com array deps vazio',Date.now());
  // }, []);//Executado apenas na montagem do componente pela primeira vez


  useEffect(()=>{
    console.log('Theme mudou', theme,Date.now());
    document.documentElement.setAttribute('data-theme', theme);

  return ()=>{
    console.log('Olha,este componente será atualizado');
  };
  },[theme]); //Executado toda vez que a variável theme for atualizada

  return (
    <nav className={styles.menu}>
      <h1>{theme}</h1>
      <a className={styles.menuLink} href='#' aria-label='Ir para a Home' title='Ir para a Home'>
        <HouseIcon />
      </a>

      <a className={styles.menuLink} href='#' aria-label='Ver Histórico' title='Ver Histórico'>
        <HistoryIcon />
      </a>

      <a className={styles.menuLink} href='#' aria-label='Ir para as Configurações' title='Ir para as Configurações'>
        <SettingsIcon />
      </a>
      <a className={styles.menuLink} href='#' aria-label='Mudar Tema' title='Mudar Tema'
      onClick={handleThemeChange}>
        <SunIcon />
      </a>
    </nav>
  );
}
