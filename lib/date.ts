export const formatDate = (date: Date | string) => {
    const dateObj = date instanceof Date ? date : new Date(date);

    const diff = new Date().getTime() - dateObj.getTime();
    const diffInMinutes = Math.floor(diff / 1000 / 60);
    const diffInHours = Math.floor(diffInMinutes / 1000 / 60);
    const diffInDays = Math.floor(diffInHours / 1000 / 60);
    const diffInMonths = Math.floor(diffInDays / 1000 / 60);
    const diffInYears = Math.floor(diffInMonths / 1000 / 60);



    if(diffInYears > 0) {
        return `${diffInYears}y`;
    }
    if(diffInMonths > 0) {
        return `${diffInMonths}m`;
    }
    if(diffInDays > 0) {
        return `${diffInDays}d`;
    }
    if(diffInHours > 0) {
        return `${diffInHours}h`;
    }
    if(diffInMinutes > 0) {
        return `${diffInMinutes}m`;
    }
    return 'now';
};