import styles from "./style"
import {Navbar,Hero,Book_Reviews,Filters,Contacts} from "./components"
import { logo } from "./assets"

const App = () => {
  return ( 
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <img src={logo} alt="logo" className="w-[500px] h-[124px] py-1 px-1" />
          <Navbar />
        </div>
      </div>

      <div className={`bg-textColor rounded-xl${styles.flexStart}`}>
        <div className ={`${styles.boxWidth}`}>
          <Hero/>
        </div>
      </div>

      <div className={`h-screen bg-primary rounded-xl ${styles.paddingX} ${styles.flexStart}`}>
        <div className ={`${styles.boxWidth}`}>
         
        </div>
      </div>
    </div>
  )
}

export default App