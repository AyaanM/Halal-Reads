import styles from "./style"
import {Navbar,Hero,Book_Reviews,Filters,Contacts, Navbar2} from "./components"

const App = () => {
  return ( // was too lazy to figure out the css to just make the contact us
  // in the right spot, feel free to fix that and get rid of navbar2
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar2/> 
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