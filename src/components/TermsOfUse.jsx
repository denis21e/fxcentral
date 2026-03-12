import React from 'react';
import { Container, Accordion } from 'react-bootstrap';
import './TermsOfUse.css';

const TermsOfUse = () => {
  return (
    <div id="terms" className="terms-section">
      <Container>
        <h2 className="section-title text-center mb-5">Terms of Use</h2>
        
        <div className="terms-container">
          <div className="disclaimer-section">
            <h3>Disclaimer</h3>
            <div className="disclaimer-content">
              <p>
                <strong>RISK DISCLOSURE:</strong> Trading foreign exchange on margin carries a high level of risk, and may not be suitable for all investors. The high degree of leverage can work against you as well as for you. Before deciding to invest in foreign exchange you should carefully consider your investment objectives, level of experience, and risk appetite.
              </p>
              <p>
                The possibility exists that you could sustain a loss of some or all of your initial investment and therefore you should not invest money that you cannot afford to lose. You should be aware of all the risks associated with foreign exchange trading, and seek advice from an independent financial advisor if you have any doubts.
              </p>
              <p>
                <strong>EDUCATIONAL DISCLAIMER:</strong> The Trading Channel (TTC) is an educational service provider. All content provided by TTC is for educational purposes only and should not be considered as financial advice or a recommendation to buy or sell any financial instrument. Past performance is not indicative of future results.
              </p>
              <p>
                Trading performance displayed on this website is hypothetical. Hypothetical performance results have many inherent limitations, some of which are described below. No representation is being made that any account will or is likely to achieve profits or losses similar to those shown. In fact, there are frequently sharp differences between hypothetical performance results and the actual results subsequently achieved by any particular trading program.
              </p>
              <p>
                One of the limitations of hypothetical performance results is that they are generally prepared with the benefit of hindsight. In addition, hypothetical trading does not involve financial risk, and no hypothetical trading record can completely account for the impact of financial risk in actual trading.
              </p>
            </div>
          </div>
          
          <div className="policy-section">
            <h3>Policies</h3>
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Cancellation Policy</Accordion.Header>
                <Accordion.Body>
                  <p>
                    <strong>Digital Products:</strong> Due to the nature of digital products and services, all sales are final. Once you have purchased and received access to our digital courses, reports, or other digital products, no refunds will be issued.
                  </p>
                  <p>
                    <strong>Subscription Services:</strong> For subscription-based services, you may cancel your subscription at any time by logging into your account or contacting our support team at support@thetradingchannel.net. Upon cancellation, you will maintain access to the service until the end of your current billing period. No partial refunds will be issued for unused portions of the current billing period.
                  </p>
                  <p>
                    <strong>Mentorship Programs:</strong> For our mentorship programs, you may request a cancellation within 14 days of purchase. A refund may be issued at our discretion, less a 15% administrative fee. After 14 days, no refunds will be provided.
                  </p>
                  <p>
                    <strong>Exceptions:</strong> In exceptional circumstances, we may consider refund requests outside of our standard policy. Such requests will be evaluated on a case-by-case basis and must be submitted in writing to support@thetradingchannel.net.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Privacy Policy</Accordion.Header>
                <Accordion.Body>
                  <p>
                    <strong>Information Collection:</strong> We collect personal information that you voluntarily provide to us when you register for an account, express interest in obtaining information about us or our products and services, participate in activities on the website, or otherwise contact us.
                  </p>
                  <p>
                    <strong>Use of Information:</strong> We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
                  </p>
                  <p>
                    <strong>Information Sharing:</strong> We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.
                  </p>
                  <p>
                    <strong>Data Security:</strong> We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TermsOfUse;
