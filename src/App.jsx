import styles from "./style"
import {Navbar,Hero,Book_Reviews,Filters,Contacts} from "./components"
import { logo } from "./assets"


const App = () => {
  return ( 
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} flex justify-between items-center`}>
        <img src={logo} alt="logo" className="w-[250px] h-[115px] py-3 md:w-[300px]" />
          <Navbar/>
        </div>
      </div>

      <div className={`bg-textColor rounded-xl${styles.flexStart}`}>
        <div className ={`${styles.boxWidth}`}>
        </div>
      </div>

      <Hero/>
      
      <div className={`h-screen bg-primary rounded-xl ${styles.paddingX} ${styles.flexStart}`}>
        <div className ={`${styles.boxWidth}`}>
         
        </div>
      </div>
    </div>
  )
}

export default App