/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./Infobox.css"
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';


export default function Infobox({info}) {
    const Img_URL = "https://images.unsplash.com/photo-1672226405717-697c84f48f9e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    
    const Hot_URL = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    
    const Cold_URL = "https://images.unsplash.com/photo-1668531387310-9c3c2f272d52?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    
    const Rain_URL = "https://media.istockphoto.com/id/498063665/photo/rainy-landscape.webp?a=1&b=1&s=612x612&w=0&k=20&c=hOE6L7f7OoSKUW1Q4tR27GoEkOU_ywKJGCvSO77SeZg=";
    
    
    return (
        <div className="infobox">
            <div className='cardcontainer'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={ info.humidity > 80 ? Rain_URL : info.temp > 18 ? Hot_URL : Cold_URL}
                    title="green iguana"
                />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">

                    <b>{ info.City }</b>&nbsp;&nbsp;

                    { info.humidity > 80 ?<ThunderstormIcon/>: info.temp > 18 
                    ?<WbSunnyIcon/>:<AcUnitIcon/>}
                    </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                    <p>Temperature = { info.temp }&deg;C</p>
                    <p>Humidity = { info.humidity }</p>
                    <p>Min-temp = {info.tempMin }&deg;C</p>
                    <p>Max-temp = { info.tempMax }&deg;C</p>
                    <p>&nbsp;The weather can be describe as {info.weather} and feels like { info.feelsLike}&deg;C&nbsp;</p>
                    
                </Typography>
            </CardContent>
            
            </Card>
            </div>
        </div>
    )
}



