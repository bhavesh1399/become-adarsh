import { IconButton } from "@mui/material";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export function Pune() {
    const navigate = useNavigate();
    const headingStyle = {
        fontWeight: "bold",
        fontSize: "1.25rem"
    }
    return (
        <>
            <BackIcon onClick={() => navigate(-1)}>
                {/* Navigate back */}
                <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1fd569ca716b29d7f1a98071e37fd2287542114cc8243ecad11b40ab9ef936c8?apiKey=65b9bef5a9974c109a4afdb193963080&"
                    alt="Back button"
                />
            </BackIcon>
            <MainContainer>
                <TemplePageContainer>
                    <Header>
                        <Title>BAPS Shree Swaminarayan Mandir, Pune</Title>
                    </Header>
                    <TempleImageWrapper>
                        <TempleImage
                            src="https://www.baps.org/Data/Sites/1/Media/ModuleRotatorImages/baps_pune_worldwide.jpg"
                            alt="BAPS Shree Swaminarayan Mandir, Pune"
                        />
                    </TempleImageWrapper>
                </TemplePageContainer>

                <Content>
                    <Paragraph>
                        પુણે શહેર પશ્ચિમ મહારાષ્ટ્રના લીલાછમ્મ પર્વતીય ઢોળાવોની વચ્ચે છે. આ પર્વતીય ઢોળાવોમાં દક્ષિણ- પશ્ચિમ બાજુએ પ્રસિદ્ધ “સિંહગઢ કિલ્લો” છે. જે પૂર્વે “કોંઢાણા કિલ્લા” તરીકે ઓળખાતો.
                        પુણે શહેરનો સૌથી પૌરાણિક ઉલ્લેખ, જંગલી મહારાજ માર્ગ પર આઠમી સદીની “પાતાલેશ્વર ગુફા”માં મળે. મધ્યયુગ કાલનાં “રાષ્ટ્રકૂટ” રાજવીઓના તામ્રપત્ર પર પુણે શહેરનું નામ “પુણ્યક” તરીકે લખેલ છે. દસમી અને અગિયારમી સદીમાં આ શહેર - “પુનવડી” અને “કસબાપુણે” તરીકે ઓળખાતું.
                        સત્તરમી સદીમાં છત્રપતી શાહુ મહારાજે બાજીરાવ(પહેલા)ને પ્રધાનમંત્રી પદ આપ્યું. જેણે પુણેની ઐતિહાસિક ધરોહર અને જગપ્રસિદ્ધ “શનિવારવાડા” મહેલનું નિર્માણ કર્યું. બધાજ પેશ્વાઓમાં બાજીરાવ (પહેલો) સૌથી વધુ શક્તિશાળી, અજેય યોદ્ધા તરીકે ઓળખાય છે. નીલકંઠવર્ણી જે પેશ્વાને મળેલ એ બાજીરાવ(બીજા)ને મળેલા હતા.
                        <br />
                    </Paragraph>

                    <Paragraph style={headingStyle}>
                        નીલકંઠવર્ણી અને પુણે
                        <br />
                    </Paragraph>

                    <Paragraph>
                        સંવત્ ૧૮૫૫ અષાઢ માસમાં પુણેમાં નીલકંઠવર્ણી પધારેલા. અષાઢ સુદ પડવો શુક્રવાર તા. ૧૫-૦૬-૧૭૯૮ થી અષાઢ વદ અમાસ શુક્રવાર તા. ૧૩-૦૭-૧૭૯૮ સુધી બાપુ ગોખલેની ફૂલવાડીમાં રોકાયેલ. અષાઢ માસની બન્ને એકાદશીએ વર્ણીને બાપુએ પોતાના ઘરે પધરાવેલ. બાપુ ગોખલેના પત્ની આનંદીબાઈ રોજ ચંદન ઘસીને વર્ણીની પુજા કરતા.
                        તે સમયના પેશ્વા બાજીરાવ(બીજા)એ વર્ણીને પોતાના રાજમહેલ (શનિવારવાડા)માં પધરાવ્યા. તેમણે અને તેમની પત્ની રાધાબાઈએ વર્ણીનું સારુ સન્માન કર્યું હતું. આવો વિવેક જોઇને વર્ણી બન્ને ઉપર રાજી થયેલ.
                        નિર્માનાનંદસ્વામી (પૂર્વાશ્રમમાં કુંડળ ગામના હાથિયો પટગર) સને ૧૮૧૨માં પુણે પધાર્યા હતા. . નિર્માનાનંદ સ્વામીએ ૬ માસ સુધી બાપુ ગોખલે ને વાતો કરી. બાપુ ગોખલેએ ગઢડા શ્રીજી મહારાજ ઉપર સુવર્ણ અક્ષરેથી પત્ર લખી મોકલ્યો. પત્ર વાંચી શ્રીજી મહારાજ રાજી થયાને બોલ્યા કે દીવાન અપાર બુદ્ધીશાળી છે.
                        ઉપરાંત પુણેથી એક ગૃહસ્થ હરિભક્ત સાધુ પણ થયેલ, જેમને ગોપાળાનંદ સ્વામીએ દિક્ષા આપી “કેશવદાસ સ્વામી” નામ રાખેલ.
                        <br />
                    </Paragraph>

                    <Paragraph style={headingStyle}>
                        ભગતજીમહારાજ અને પુણે
                        <br />
                    </Paragraph>

                    <Paragraph>
                        હર્ષદભાઈ દવે લિખિત ભગતજી મહારાજ જીવન ચરિત્રમાં પુણેના ચુનીલાલ નામના હરિભક્તનો ઉલ્લેખ આવે છે. પ્રસંગ મુજબ તેઓ ભગતજી મહારાજને પ્રશ્ન પુછે છે કે “મુકામ એટલે શું અને નિશાન એટલે શું?” ત્યારે ભગતજી મહારાજ પુણેના હરિભક્તને વેદો-ઉપનિષદોના અર્કરૂપ વૈદિક સિદ્ધાંત એકદમ સરળ-સાદી
                        ભાષામાં સમજાવે છે કે, “અક્ષર સાથે એકતા કરવીએ મુકામ અને ભગવાનની મૂર્તિએ નિશાન. આ મુકામમાં પગ સ્થિર હોય તો જ નિશાન પાર પડે એટલે કે બ્રહ્મને જ પોતાનું સ્વરૂપ માને અને તેને વિશે પરબ્રહ્મની મૂર્તિ છે તેની જ ઉપાસના કરે, એવો જે હોય તે મુકામને પામ્યો કેહવાય.”
                        <br />
                    </Paragraph>

                    <Paragraph style={headingStyle}>
                        શાસ્ત્રીજી મહારાજ અને પુણે
                        <br />
                    </Paragraph>

                    <Paragraph>
                        સને ૧૯૩૭માં ગોંડલમાં સત્સંગિજીવનની પારાયણમાં શાસ્ત્રીજી મહારાજની સાધુતા અને મહિમાની વાતો સાંભળીને પુણેના ભાવિક હરિભક્ત ભગવાનદાસ અહી શાસ્ત્રીજી મહારાજના દર્શને પધાર્યા હતા. . તેમણે બે સંકલ્પો કરેલા. ૧) પુણેમાં મંદિર થાય અને ૨) સ્વામિનારાયણ ભગવાનના દર્શન થાય તો જ જમવું.
                        પૂર્ણાહુતિના દિવસે શાસ્ત્રીજી મહારાજ કથા વાંચતા હતા ત્યારે ભગવાનદાસને વ્યાસપીઠ ઉપર શાસ્ત્રીજી મહારાજના સ્થાને શ્રીઘનશ્યામ મહારાજ સ્વયં કથા કરે છે એવા દર્શન થયા હતા. પૂર્ણાહુતિ પછી શાસ્ત્રીજી મહારાજ પાસે જઈને તેઓએ આ વાત કરી. સ્વામીશ્રીએ આશીર્વાદ આપતા કહ્યું,
                        “મહારાજે તમારો સંકલ્પ પૂરો કર્યો માટે હવે જમીલો અને આવો અનશન વ્રત લેવાનો નિયમ હવે પછી રાખશો નહીં.” શાસ્ત્રીજી મહારાજના આશીર્વાદથી પુણેમાં વડતાલ તાબાનું હરિમંદિર થયુ અને પુણેમાં સ્વામિનારાયણનું ભજન શરૂ થયુ.
                        <br />
                    </Paragraph>

                    <Paragraph style={headingStyle}>
                        યોગીજી મહારાજ અને પુણે
                        <br />
                    </Paragraph>

                    <Paragraph>
                        સને ૧૯૫૬માં યોગીજી મહારાજે સ્પેશિયલ ટ્રેન યાત્રા કાઢેલ ત્યારે પ્રમુખસ્વામી મહારાજ અને વિનુભાઈએ (ત્યારે મહંતસ્વામી મહારાજ યુવકમાં હતા) પુણે રેલ્વે સ્ટેશન ઉપર સભા કરી હતી.
                        યોગીજી મહારાજ સને ૧૯૬૬માં પ્રમુખસ્વામી મહારાજ, મહંતસ્વામી મહારાજ, ઈશ્વરચરણ સ્વામી, નારાયણ ભગત (પૂ. વિવેકસાગર સ્વામી) વગેરે સંતોની સાથે ચાર દિવસ તા. ૯ થી ૧૨ ઓક્ટોબરના રોજ પધાર્યા હતા.
                        તે સમયે “અગ્રસેન ભવન”માં બે દિવસની સભા રાખી હતી. ૧૦-૧૫ હરિભક્તોનું મંડળ તૈયાર કરાવ્યું અને શિવાજીનગર-વાકડેવાડીમાં અક્ષરપુરુષોત્તમ સત્સંગની શુભ શરૂઆત થઇ.
                        <br />
                    </Paragraph>

                    <Paragraph style={headingStyle}>
                        પ્રમુખસ્વામી મહારાજ અને પુણે
                        <br />
                    </Paragraph>

                    <Paragraph>
                        ઈ.સ. ૧૯૬૬માં યોગીજી મહારાજ સાથે પધાર્યા હતા.
                        તા. ૩૧ મે, ૧૯૭૨માં એક હરિભક્તની ફેક્ટરીનું ઉદ્દઘાટન કરવા પધાર્યા હતા. અને ત્રણ દિવસનું રોકાણ પણ કર્યું હતું.
                        તા. ૦૩-૦૧-૧૯૭૩માં સ્પે. ટ્રેન યાત્રા વખતે પૂણે સ્ટેશનને પાવન કર્યું હતું.
                        ૧૩ જાન્યુઆરી, ૧૯૭૭ ના દિવસે અહીં રજનીભાઈ ભટ્ટના ઘરે પ્રાતઃ પૂજા કરી. રજનીભાઈ પરમ ભક્તરાજ હર્ષદભાઈ દવેના સગા ભાણા થવાથી શાસ્ત્રીજી મહારાજ એમને ”ભાણાભાઈ” કહેતા. તેઓ મૂળ ભાવનગરના. શાસ્ત્રીજી મહારાજે ભાવનગરમા ઝોળી માંગેલ ત્યારે તે સમયે એક બાજુથી ઝોળી તેમણે પકડી હતી. ત્યારે તેમની ઉમર તેર વર્ષની હતી. પ્રમુખસ્વામી મહારાજ પણ “ભાણાભાઈ”ના હુલામણા નામે તેઓને બોલાવતા. હર્ષદભાઈ દવેએ રજનીભાઈ ભટ્ટના ઘરે જ વેદરસનું ભાષાંતર કર્યું હતું અને ભગવાન સ્વામિનારાયણ ભાગ-૪ સંપૂર્ણ અને ભાગ-૫નું થોડું લેખન અહિયાં કર્યું હતું.
                        તા. ૨૭, ૨૮-૦૩-૧૯૭૯ના દીને પૂજ્ય પ્રમુખસ્વામી મહારાજ બે દિવસ અહીં રોકાયા હતા.
                        તા. ૭-૧૨-૧૯૮૭ પૂજ્ય પ્રમુખસ્વામી મહારાજ ૧૫ સંતો અને ૧૫-૨૦ લંડનના હરિભક્તો સાથે પુણે પધાર્યા હતા. . ત્યારે ત્રણ દિવસ રોકાયેલ.
                        તા. ૧૭-૧૨-૧૯૮૯. બાપા ત્રણ દિવસ માટે ટ્રેનમાં પુણે પધાર્યા હતા. . રવિવારના દિવસે મુંબઈથી સાથે પધારેલા સંતો દ્વારા “નેહરુ મેમોરિયલ હોલ”માં કિર્તન આરાધના થઇ. આ જાહેરસભાની જાહેરાત સમાચારપત્રમાં આપેલ હોઈ જાહેરખબર વાંચીને બાપા પ્રત્યે ઘણા લોકો આકર્ષાયા અને આખો હોલ ખીચોખીચ ભરાઈ ગયેલ.
                        તા. ૧૭-૦૧-૨૦૦૫ પુણેથી સત્સંગ મંડળ મુંબઈ ખાતે સ્વામી બાપાના દર્શને ગયેલ, ત્યાં ૮૫ રજતતુલા (બાપાના ૮૫ વર્ષ હોઈ) હરિકૃષ્ણ મહારાજની કરેલી.
                        તા. ૨૧,૨૨,૨૩-૦૧-૨૦૦૫. બાપા મુંબઈથી પુણે કારમાં પધાર્યા હતા. તે સમયે તેઓનો ઉતારો છોટુભાઈ અજમેરાના બંગલામાં હતો. તે રોકાણ દરમિયાન બાપાએ શિખરબદ્ધ મંદિર માટે બે જમીનો જોઈ. છોટુભાઈ અજમેરાએ પોતાની બંજારા હિલ પાસેની જમીન પણ બતાવી. બાપાએ ગાડીમાંથી ઉતરીને ફૂલ છાંટયા હતા. જે સ્થાન પર નીલકંઠવર્ણી રોકાયા હતા તે પ્રસાદીભૂત “અકરા મારૂતિ મંદિર” ની જગ્યાએ દર્શને પધાર્યા હતા. સ્વામીશ્રી અગાઉ આઠ વખત પુણે પધાર્યા હતા. આ નવમી અને અંતિમ પધરામણી હતી. પણ અગાઉ ક્યારેય આ પ્રસાદીભૂત જગ્યા પર આવેલા નહિ. છતાં અકરા મારુતિ (અગિયાર હનુમાનજી)ના દર્શન કરી પછી સામેના પુરાતન મકાન તરફ જોઇને બોલ્યા કે, “અંદર ચાલો, અંદર પણ એક પુરાતન મંદિર છે.” જ્યાં પુરાતન અને ઐતિહાસિક રામજી મંદિર છે. આવું કહીને સ્વામીબાપાએ અંતર્યામીપણું દેખાડ્યું હતું.
                        તા. ૨૪-૦૧-૨૦૧૧ના દિવસે મુંબઈમાં (દાદર મંદિરે) સ્વામીશ્રીએ પુણે શિખરબદ્ધ મંદિર માટે ખરડો કર્યો હતો. “શિલાન્યાસ વિધિ” પણ એ જ દિવસે થયો. તા. ૩૦-૦૫-૨૦૧૪ સ્વામીશ્રીએ મુંબઈ ખાતે પૂજન કરેલી શિલાનો ”શિલાન્યાસ મહોત્સવ” થયો. તા. ૩૦-૧૧-૨૦૧૪ સારંગપુર ખાતે સ્વામીશ્રીએ પ્રથમ સ્તંભનું પૂજન કર્યુ. એ સમયે અહી વિચરણ કરતા પૂ.શ્રીરંગદાસ સ્વામીને આશીર્વાદ આપ્યા કે “મંદિર બે વર્ષમાં પૂરુ થઈ જશે.”
                        તા. ૧૪-૧૨-૨૦૧૪ સ્વામીશ્રીએ પૂજેલ મંદિરના પ્રથમ સ્તંભનું સ્થાપન પૂ. કોઠારી બાપા (પૂ. ભક્તિપ્રિય સ્વામી) એ કર્યું હતું.
                        તા. ૧૯-૦૨-૨૦૧૭ના રોજ મંદિર મૂર્તિપ્રતિષ્ઠા થઈ. સંતો-ભક્તોના સમર્પણથી સિંહગઢ કિલ્લાના લીલાછમ્મ પર્વતોની ગોદમાં જ BAPS સ્વામિનારાયણ મંદિર નિર્માણ પામ્યુ હતું. ગુરુપદે આવ્યા પછી પ્રથમ જ વાર મહંતસ્વામી મહારાજે સમગ્ર મહારાષ્ટ્ર જેમની વંદના કરે છે એવા છત્રપતી શિવાજી મહારાજના જન્મદિવસે જ શિખરબદ્ધ મંદિરની પ્રતિષ્ઠા કરી.
                        <br />
                    </Paragraph>


                </Content>
            </MainContainer>
        </>
    );
}

const MainContainer = styled.div`
  position: relative;
  margin-top: 21px;
  height: auto;
  padding: 0 20px;
`;

const BackIcon = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
  margin-left: 1.5rem;
`;

const Header = styled.header`
  background-color: #fff;
`;

const Title = styled.h2`
  background-color: #fff;
`;

const Content = styled.section`
  background-color: #fff;
`;

const Paragraph = styled.p`
  background-color: #fff;
`;

const TemplePageContainer = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
`;

const TempleTitle = styled.h1`
  color: var(--BG-Pink, #270025);
  font: 700 19px Overlock, sans-serif;
`;

const TempleImageWrapper = styled.figure`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 17px;
  border-radius: 8px;
`;

const TempleImage = styled.img`
  width: 100%;
  aspect-ratio: 1.47;
  object-fit: cover;
  object-position: center;
  border-radius: 10px;
`;

export default Pune;
