import "./HeaderStyles.css";
import {FaPhone,FaMailBulk} from "react-icons/fa";
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'; 

function Footer(){
    return(
        <>
       <footer>

        <center><table className="table">
            <tr>
                <td><a href="#"><img src="/images/insta logo.jpg" height="40" width="40" alt="logo" />INSTAGRAM </a></td>
                <td><a href="#"><img src="images/Facebook Logo.png" height="40" width="40" alt="logo"/>FACEBOOK</a></td>
                <td><FaMailBulk></FaMailBulk>email us on:</td>
                <td><FaPhone></FaPhone>contact us on:</td>

            </tr>
        </table></center>
            <p>Copyright &copy; Last block coders</p>
            <hr/>
</footer>
        </>
    )
}
export default Footer;

