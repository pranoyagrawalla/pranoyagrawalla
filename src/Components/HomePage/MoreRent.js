import KingBedIcon from '@mui/icons-material/KingBed';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CancelIcon from '@mui/icons-material/Cancel';
import EngineeringIcon from '@mui/icons-material/Engineering';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';
import UpgradeIcon from '@mui/icons-material/Upgrade';
const iconStyles = {
    fontSize: '10px',
    color: 'black',
    marginBottom: '8px',
  };
const MoreData = [
    {
        id: 1,
        icons: (
            <svg
                width="60"
                height="60"
                viewBox="0 0 18 18"
                id="icon-finest__quality"
                y="247"
            >
          <g fill="none" fillRule="evenodd">
                <KingBedIcon style={iconStyles} />         
           </g>   
         </svg>
        ),
        title: "Finest-quality products",
        discription: "Quality matters to you, and us! That's why we do a strict quality-check for every product."
    },
    {
        id: 2,
        icons: (
            <svg width="60" height="60" viewBox="0 0 18 18" id="icon-free__relocation" y="367"><g fill="none" fillRule="evenodd">< LocationOnIcon style={iconStyles} /></g></svg>
        ),
        title: "Free relocation",
        discription: "Changing your house or even your city? We'll relocate your rented products for free."
    },
    {
        id: 3,
        icons: (
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 18 18" id="icon-free__maintenance" y="307"><g fill="none" fillRule="evenodd"><EngineeringIcon style={iconStyles} /></g></svg>
        ),
        title: "Free maintenance",
        discription: "Keeping your rented products in a spick and span condition is on us, so you can sit back and relax."
    },
    {
        id: 4,
        icons: (
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 18 18" id="icon-cancel__anytime" y="127"><g fill="none" fillRule="evenodd"><CancelIcon style={iconStyles} /> </g></svg>
        ),
        title: "Cancel anytime",
        discription: "Pay only for the time you use the product and close your subscription without any hassle."
    },
    {
        id: 5,
        icons: (
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 18 18" id="icon-easy__return" y="187"><g fill="none" fillRule="evenodd"><AssignmentReturnIcon style={iconStyles} /></g></svg>
        ),
        title: "Easy return on delivery",
        discription: "If you don't like the product on delivery, you can return it right away—no questions asked."
    },
    {
        id: 6,
        icons: (
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 18 18" id="icon-keep__upgrading" y="427"><g fill="none" fillRule="evenodd"><UpgradeIcon style={iconStyles} /></g></svg>
        ),
        title: "Keep upgrading",
        discription: "Bored of the same product? Upgrade to try another, newer design and enjoy the change!"
    },
]

export default MoreData