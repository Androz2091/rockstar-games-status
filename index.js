const fetch = require('node-fetch');

module.exports = async (timezone = '', language = '') => {

    const result = await fetch(`https://support.rockstargames.com/${language ? `${language}/` : ''}services/status.json${timezone ? `?tz=${timezone}` : ''}`);
    const data = await result.json();

    return {
        redDedOnline: {
            pc: data.statuses.find((s) => s.name === 'Red Dead Online').services_platforms.find((s) => s.name === 'PC').service_status.status,
            xboxOne: data.statuses.find((s) => s.name === 'Red Dead Online').services_platforms.find((s) => s.name === 'Xbox One').service_status.status,
            ps4: data.statuses.find((s) => s.name === 'Red Dead Online').services_platforms.find((s) => s.name === 'PS4').service_status.status,
            stadia: data.statuses.find((s) => s.name === 'Red Dead Online').services_platforms.find((s) => s.name === 'Stadia').service_status.status
        },
        gtao: {
            pc: data.statuses.find((s) => s.name === 'Grand Theft Auto Online').services_platforms.find((s) => s.name === 'PC').service_status.status,
            xboxOne: data.statuses.find((s) => s.name === 'Grand Theft Auto Online').services_platforms.find((s) => s.name === 'Xbox One').service_status.status,
            xbox360: data.statuses.find((s) => s.name === 'Grand Theft Auto Online').services_platforms.find((s) => s.name === 'Xbox 360').service_status.status,
            ps3: data.statuses.find((s) => s.name === 'Grand Theft Auto Online').services_platforms.find((s) => s.name === 'PS3').service_status.status,
            ps4: data.statuses.find((s) => s.name === 'Grand Theft Auto Online').services_platforms.find((s) => s.name === 'PS4').service_status.status
        },
        socialClub: {
            all: data.statuses.find((s) => s.name === 'Social Club').services_platforms.find((s) => s.name === 'All Features').service_status.status
        },
        launcher: {
            authentication: data.statuses.find((s) => s.name === 'Rockstar Games Launcher').services_platforms.find((s) => s.name === 'Authentication').service_status.status,
            store: data.statuses.find((s) => s.name === 'Rockstar Games Launcher').services_platforms.find((s) => s.name === 'Store').service_status.status,
            cloud: data.statuses.find((s) => s.name === 'Rockstar Games Launcher').services_platforms.find((s) => s.name === 'Cloud Services').service_status.status,
            downloads: data.statuses.find((s) => s.name === 'Rockstar Games Launcher').services_platforms.find((s) => s.name === 'Downloads').service_status.status
        },
        lastUpdate: data.updated
    }

};
