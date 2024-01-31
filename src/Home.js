import {Link} from 'react-router-dom';
 import { motion } from 'framer-motion';
export const Home = () =>{

    return(
        
        <div className="header">
            <motion.div className="heading" 
            initial ={{x: -1000}}
            animate={{x:0}}
            transition={{
               duration:"2",
            }}>
        <h1 > Welcome to The Délicieux Backery</h1>
        <h2>Incredibly pleasing delicious things</h2>
        <h4>Backed goods, Tasty Food, & Lovely things</h4>
        <div>
        <Link to="/menu">
        <button className='btn_menu'>Open our menu</button>
        </Link>

        </div>

            </motion.div>
        </div>
    )
}