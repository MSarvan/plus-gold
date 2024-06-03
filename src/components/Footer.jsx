import React from "react";
import "../styles/Footer.scss";
import gold from "../images/gold.svg";
import plus from "../images/plusfooter.svg";
import social from "../images/social.svg";
import download from "../images/download.svg";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="money-section">
        <div className="money-left-section">
          <h2>Your money is 100% Secured!</h2>
          <p>
            Your asset is stored in secured vaults at <br /> Augmont and
            available to withdraw anytime
          </p>
          <div>
            <img src={gold} alt="gold-properties" />
          </div>
        </div>
        <div className="money-right-section">
          <img
            src="https://storage.googleapis.com/getplus.in/images/BankSafe.png"
            alt="BankSafe"
          />
        </div>
      </div>
      <div className="footer-container">
        <div className="address-container">
          <div className="address-partition">
            <div>
              <div className="plus-logo-footer">
                <img src={plus} alt="plus-logo" />
              </div>
              <div className="address">
                B.No 19, H.No 1413, R.S. Pal, Near Mahatma Gandhi School, <br />{" "}
                Nagpur, Maharashtra, 440014 <br /> Email : founders@getplus.in |
                Phone : +91-9035202565
              </div>
              <div>
                <img src={social} alt="socialmedia-logos" />
              </div>
            </div>
            <div className="footer-items-div">
              <div className="plus-menu">
                <div className="plus-head">Plus</div>
                <div>About us</div>
                <div>Partner Jewellers</div>
                <div>Gold Coin</div>
                <div>Career</div>
                <div>Blog</div>
                <div>Privacy Policy</div>
              </div>
              <div className="plus-menu">
                <div className="plus-head">Places</div>
                <div>Bangalore</div>
                <div>Chennai</div>
                <div>Mumbai</div>
                <div>Kolkata</div>
                <div>Delhi</div>
              </div>
            </div>
          </div>
        </div>
        <div className="line"></div>
        <div className="copyright-section">
          <div>© FinShakti Solutions Pvt. Ltd.</div>
          <div>
            <img src={download} alt="download-ad" />
          </div>
        </div>
        <div className="qn-ans-section">
          <div className="each-qn-ans">
            <div className="each-qn">What is a Gold Savings Scheme?</div>
            <div className="each-ans">
              <div>
                A gold savings scheme or gold investment scheme is a financial
                instrument that enables individuals to invest in gold
                systematically over a period of time. At Plus Gold, India’s
                first jewellery savings app, we offer various gold schemes to
                cater to the diverse needs of gold investors and buyers with
                varying budgets.
              </div>
              <div>
                These schemes work on the principle of accumulating gold
                gradually, making them accessible to all seeking to invest in
                gold. PlusGold allows investors to choose from different schemes
                like the golden bonanza scheme, wedding saving scheme,
                anniversary gift scheme, gold monthly scheme, and many other
                gold savings schemes, each tailored to suit their preferences
                and financial goals.
              </div>
              <div>
                These schemes often offer flexibility in terms of payment
                frequencies and duration, allowing investors to choose the most
                suitable plan according to their financial capabilities. By
                choosing in a gold savings scheme, individuals can diversify
                their investment portfolio, hedge against inflation, and
                accumulate gold in a disciplined manner, thereby fostering
                long-term financial security,
              </div>
            </div>
          </div>

          <div className="each-qn-ans">
            <div className="each-qn">Features of Gold Investment Scheme</div>
            <div className="each-ans">
              <div>
                Gold investment schemes offered by PlusGold offer various
                features, including flexible investment options, assured
                returns, and the convenience of online transactions. Some other
                features of opting for PlusGold’s gold investment plans include:
              </div>

              <ul>
                <li>
                  0 Lock-in period: Investing in gold schemes with PlusGold
                  comes with no lock-in period, meaning you can withdraw it
                  anytime you want.
                </li>
                <li>
                  Safe & Secure: With PlusGold’s gold investment schemes, your
                  gold is 100% secured in regulated vaults.{" "}
                </li>
                <li>
                  Instant Withdrawal: Our gold investment schemes allow for
                  instant cash withdrawal into your account.
                </li>
                <li>
                  Flexibility of one-time or SIP: If you opt for our golden
                  bonanza scheme, it gives you the flexibility to buy gold
                  through one-time or SIP. Plus, you get 10% extra gold, meaning
                  you get 1gm extra gold on the purchase of every 10gm.{" "}
                </li>
              </ul>
              <div>
                Our gold investment plans are designed to cater to the diverse
                needs of investors, ensuring maximum benefits.
              </div>
            </div>
          </div>

          <div className="each-qn-ans">
            <div className="each-qn">Why Invest in Gold?</div>
            <div className="each-ans">
              <div>
                Investing in gold brings several benefits to the table. Here is
                why you should invest in gold:
              </div>
              <div>
                <div style={{ fontWeight: "500" }}>
                  Gold holds its value over time:
                </div>
                <div>
                  Gold is a smart investment because it helps protect your money
                  from losing value when prices go up. While the value of
                  currency goes down as prices of commodities rise, gold’s worth
                  tends to stay steady or even increase, protecting your
                  investment in the long run. That is why investors consider
                  gold as one of the most trusted assets for investment. By
                  investing your hard earned money in gold, you can preserve
                  wealth, ensuring a brighter and more financially secure
                  future.
                </div>
              </div>
              <div>
                <div style={{ fontWeight: "500" }}>Universal appeal:</div>
                <div>
                  Gold holds universal appeal due to its recognized value across
                  the globe, which distinguishes it from other assets. Its
                  widespread acceptance as a form of investment ensures seamless
                  conversion to cash in different parts of the world. This
                  attribute makes gold a preferred choice for investors seeking
                  liquidity and stability in their portfolios. Additionally, its
                  enduring status as a symbol of wealth and security further
                  solidifies its universal value.
                </div>
              </div>
              <div>
                <div style={{ fontWeight: "500" }}>
                  Higher liquidity than real estate:
                </div>
                <div>
                  While real estate properties appreciate in value over time,
                  selling them at desirable prices may take time, from months to
                  years. But that is not the case with gold even in its physical
                  form. Gold investments provide faster liquidity compared to
                  other physical assets. Additionally, investment in gold comes
                  with no lock-in period except for sovereign gold bonds (SGBs).
                  That means investors can resell gold with ease anytime they
                  need cash.
                </div>
              </div>
              <div>
                <div style={{ fontWeight: "500" }}>Easy to Invest:</div>
                <div>
                  Buying gold is like investing your money in something solid
                  like coins or jewellery. While assets stored digitally are
                  susceptible to hacking and other misuse, gold remains safe
                  from such concerns. Plus, investing in gold is easy, and it
                  gives you a sense of security. These attributes make gold a
                  safer and more secure investment.
                </div>
              </div>
              <div>
                <div style={{ fontWeight: "500" }}>
                  Gold gives stable returns:
                </div>
                <div>
                  Gold is a great addition to your investments because it tends
                  to move independently from stocks and bonds. This means that
                  when other investments are doing poorly, gold can help balance
                  out your portfolio and reduce overall risk. By including gold
                  in your investment mix, you can potentially improve your
                  chances of seeing stable returns over time.
                </div>
              </div>
            </div>
          </div>

          <div className="each-qn-ans">
            <div className="each-qn">How to Invest in Gold Scheme?</div>
            <div className="each-ans">
              <div>
                A gold scheme is more or less similar to a monthly investment
                plan, but it allows investors to buy gold on their investments
                instead of getting interest. It offers a safe avenue for
                portfolio diversification and hedge against inflation.
                Individuals seeking to invest in gold may use the PlusGold app.
                PlusGold is a hassle-free platform that enables Indian
                households to invest in gold with convenience and transparency.
              </div>
              <div>
                To begin investing, simply sign up on our app, choose from our
                range of gold investment schemes tailored to suit your future
                gold purchase and financial goals, deposit your funds, and watch
                your investment grow.
              </div>
              <div>
                Whether you prefer traditional gold purchase plans or digital
                gold options, we offer flexible solutions to cater to your
                preferences. With competitive pricing, secure transactions,
                instant withdrawal, and many more benefits, PlusGold ensures a
                seamless investment experience.
              </div>
              <div>
                Start building your wealth today with our trusted gold
                investment schemes and unlock the potential of this timeless
                asset. Leverage PlusGold for your gold investment needs and
                embark on a journey towards financial security and prosperity.
              </div>
            </div>
          </div>

          <div className="each-qn-ans">
            <div className="each-qn">How Plus Gold Works?</div>
            <div className="each-ans">
              <div>
                PlusGold is a revolutionary app that makes investing in gold
                hassle-free and rewarding. The app helps Indian households
                pre-plan their jewellery purchase by saving monthly and gaining
                10% extra gold. It provides a user-friendly platform where
                investors can start saving in gold effortlessly.
              </div>
              <div>
                The app operates by offering some of the best gold-saving
                schemes, allowing for easy accessibility to pure gold both in
                physical and digital forms without the hassle of visiting
                physical stores.
              </div>
              <div>
                Users can deposit a fixed amount daily, weekly, or monthly,
                which is then converted into gold and can be redeemed anytime in
                the form of jewellery, gold coins, or cash at our 300+ trusted
                jewellery partners. Additionally, PlusGold offers the advantage
                of earning an extra 10% gold on every deposit, enhancing the
                value of the savings.
              </div>
              <div>
                This innovative approach allows individuals to accumulate gold
                systematically, ensuring they are better prepared for future
                jewellery purchases or financial security.
              </div>
              <div>
                By leveraging technology, PlusGold provides a transparent and
                convenient platform for individuals to invest in gold, catering
                to the diverse needs of Indian households. With transparent
                processes and dedicated customer support, we strive to make your
                investment journey seamless.
              </div>
            </div>
          </div>

          <div className="faq-text">FAQ</div>

          <div className="each-faq-ans">
            <div className="each-faq-qn">
              Q : Why invest in gold with Plus Gold?
            </div>
            <div className="each-faq-as">
              <div>
                Investing in gold with PlusGold offers reliability,
                transparency, and competitive returns. With our secure platform
                and lucrative gold schemes, you can build a robust gold
                investment portfolio with ease.
              </div>
            </div>
          </div>
          <div className="each-faq-ans">
            <div className="each-faq-qn">
              Q : How do I start a gold savings scheme with Plus Gold?
            </div>
            <div className="each-faq-as">
              Starting a gold savings scheme with PlusGold is easy. Simply sign
              up on our platform, choose a suitable scheme, and initiate your
              contributions. Our team will guide you through the process every
              step of the way.
            </div>
          </div>
          <div className="each-faq-ans">
            <div className="each-faq-qn">
              Q : Which gold scheme is the best?
            </div>
            <div className="each-faq-as">
              The best gold scheme depends on your investment goals and risk
              appetite. At PlusGold, we offer a range of schemes tailored to
              different preferences, ensuring there's an ideal option for every
              investor.
            </div>
          </div>
          <div className="each-faq-ans">
            <div className="each-faq-qn">
              Q : What is the 11-month gold scheme?
            </div>
            <div className="each-faq-as">
              The 10-month gold scheme is a popular investment option offered by
              PlusGold, allowing investors to deposit funds for the duration of
              10 months and earn attractive returns on their investment in gold.
            </div>
          </div>
          <div className="each-faq-ans">
            <div className="each-faq-qn">
              Q : How to invest in gold for good returns?
            </div>
            <div className="each-faq-as">
              Investing in gold for good returns involves choosing the right
              investment vehicle, understanding market trends, and staying
              updated with economic indicators. PlusGold provides the necessary
              tools and expertise to maximize your returns from gold
              investments.
            </div>
          </div>
        </div>
      </div>
      <div className="seen-section">
        <div className="seen-text">As seen on</div>
        <div className="seen-img">
          <img
            src="https://www.plusgold.in/images/sharkTankFooter.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
