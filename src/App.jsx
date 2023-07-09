import styles from "./style"
import {Navbar,Hero,Book_Reviews,Filters,Contacts} from "./components"

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />       
        </div>
      </div>

      <div className={`bg-altSecondary ${styles.flexStart}`}>
        <div className ={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-altSecondary ${styles.paddingX} ${styles.flexStart}`}>
        <div className ={`${styles.boxWidth}`}>
          <Book_Reviews />
          <Filters />          
          <Contacts />
        </div>
      </div>
    </div>
  )
}

export default App