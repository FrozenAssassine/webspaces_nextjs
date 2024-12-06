"use client";
import React, {MouseEvent } from 'react';
import styles from './SidebarItem.module.scss';
import { Icon } from '@iconify/react';

type Props ={
    icon: string,
    scrollToId?: string,
    url?: string,
}


function scrollTo(id: string) {
  if(id.length == 0)
    return;
  
  (document.getElementById(id) as HTMLElement).scrollIntoView({ behavior: "smooth", block: "start" });
}

function SidebarItem({icon, url, scrollToId}: Props) {

  return (
    <a className={styles.link} href={url} onClick={() => scrollTo(scrollToId ?? "")}>
        <Icon className={styles.icon} icon={icon}/>
    </a>
  );
}

export default SidebarItem;