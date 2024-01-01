const http = new XMLHttpRequest;
const url = 'http://localhost:3000/profile';

http.open('GET', url);
http.send();
http.onload = () => {
    const data = http.response;
    console.log(data);
}