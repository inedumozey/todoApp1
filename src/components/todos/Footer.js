import React from 'react';
import { useSelector } from 'react-redux';
import { icons } from '../../styles/util'
import { IoLogoFacebook, IoLogoTwitter, IoLogoWhatsapp, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5';

function Footer() {
    const state = useSelector(state=>state)
    const { theme } = state

    return (
        <div style={{...styles.footer, background: theme.theme.portfolio_website}}>
            <div style={{...icons.iconWrapper, ...styles.iconWrapper}}>
                <IoLogoFacebook style={{...styles.icon, color: theme.theme.kids}}/>
                <IoLogoTwitter style={{...styles.icon, color: theme.theme.kids}} />
                <IoLogoWhatsapp style={{...styles.icon, color: theme.theme.kids}} />
                <IoLogoInstagram style={{...styles.icon, color: theme.theme.kids}} />
                <IoLogoGithub style={{...styles.icon, color: theme.theme.kids}} />
            </div>
        </div>
    );
}

const styles = {
    footer:{
        minHeight: '60px'
    },
    icon: {
        fontSize: '30px',
        margin: "2px 5px"
    }
}
export default Footer;