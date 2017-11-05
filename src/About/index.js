import React from "react"

import childerImg from "../images/short-logo.jpg";
import aboutImg from "../images/about.jpg";
import styles from "./about.css";

const About = () => (
  <div className={styles.container}>
    <div className={styles.header}>
      <img src={childerImg} alt="Childer" className={styles.logo} />
    </div>
    <div className={styles.content}>
      <div className={styles.about}>ABOUT</div>
      <img src={aboutImg} alt="About us" className={styles.aboutimage} />
      <div className={styles.section}>
        <h3 className={styles.label}>What is childer?</h3>
        <div className={styles.text}><span>childer</span> was started by two Auckland mums, Louisa McGill and Esther Roberts. As our family grew, we couldn't believe the cost of buying quality new kids wear and just couldn't deal with trawling through thousands of horrible items in second-hand, online shops  - because what parent has time for that?</div>
        <div className={styles.text}>We were also worried about the impact fast fashion has on the planet, with cast-off clothing filling up landfills at an alarming rate. Kids clothing is a massive contributor to this waste - especially as most kids grow out of clothes before they can wear them out! We think parents should have the chance to buy their little ones clothes that last and can be used again and again.</div>
        <div className={styles.text}>And so, <span>childer</span> was born.</div>
        <div className={styles.text}>Our parent-to-parent marketplace is a simple, easy and sustainable online space where you can buy and sell quality kids wear and gear for ages 0 - 10.</div>
      </div>
      <div className={styles.section}>
        <h3 className={styles.label}>Want to buy stuff?</h3>
        <div className={styles.text}>{`When you scroll through our site,
          you'll find natural fabrics and materials to swaddle your little ones in,
          plus beautiful toys, books, accessories and furniture - all without the hefty price tag  of buying new and without harming the planet.
          We only accept items in great nick and clothing that is made from good stuff - we're talking cotton, wool, or silk.
          No nasty synthetics and you won't find any plastic toys here either. We want to offer that luxury vibe without the grit-your-teeth price tag.`}
        </div>
      </div>
      <div className={styles.section}>
        <h3 className={styles.label}>Want to sell stuff? </h3>
        <div className={styles.text}>
          Got some great kids stuff stashed away that you&#39;ve been meaning to get rid off? Sign up as a seller and you can easily list your items on childer.
          Simply visit our <a href="http://www.childershop.co.nz/user/marketplace/customlogin?isSeller=false">sign up page</a> to join and start selling.
          Information on fees and more can be found in our <a href="http://www.childershop.co.nz/user/policy/terms%20of%20service">Terms of Service</a>,
          and make sure you check out our <a href="https://drive.google.com/file/d/0B1uxDOhcNFJDWTFaSHFuMUw0NkE/view?usp=sharing">Seller Guidelines</a> for details of what we can accept for sale and handy tips on how to make the most out of your listing.</div>
      </div>
      <div className={styles.section}>
        <h3 className={styles.label}>Got no time to trawl through your kids&#39; old stuff?</h3>
        <div className={styles.text}>We totally get it. We&#39;ve met so many mums and dads with boxes and boxes of their kids&#39; outgrown gear hidden away in wardrobes, garages, under beds and any other spare inch of space - and who just don&#39;t have the time and energy to sort through it all. </div>
        <div className={styles.text}>
          We can take the hassle out of selling these items with our <a href="http://www.childershop.co.nz/user/policy/return%20policy">Depot Service</a>.
          Just send us your stuff and we&#39;ll take care of the sorting, photographing and listing on your behalf. Easy peasy.
        </div>
      </div>
      <div className={styles.section}>
        <h3 className={styles.label}>What&#39;s next for childer?</h3>
        <div className={styles.text}>
          We&#39;re a small company with sky-high dreams. We want to grow and develop, and we hope that you&#39;ll come along for the ride.
          We&#39;d love to hear any feedback you have - good, bad, suggestions or ideas - it will all help make <span>childer</span> better.
          Please email admin@childer.co.nz if you have thoughts you&#39;d like to share.
        </div>
      </div>
      <div className={styles.section}>
        <h3 className={styles.label}>Our charitable partner</h3>
        <div className={styles.text}>
          We&#39;re proud to partner with Auckland based charity, <a href="http://www.littlemore.co.nz">Littlemore</a>.
          Littlemore want to see communities where every new born is set for life.
          To ensure this happens that kelp kiwis donate their preloved baby clothing and essentials to families in need in Auckland.
          To learn more about them or to donate please visit their website <a href="http://www.littlemore.co.nz">www.littlemore.co.nz</a>.
        </div>
      </div>
      <div className={styles.signoff}>Thank you for using childer!</div>
      <div className={styles.signoff}>Love</div>
      <div className={styles.signoff}>Lou & Es xx</div>
    </div>
  </div>
)

export default About;
