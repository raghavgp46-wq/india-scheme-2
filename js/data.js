// data.js — Government Subsidy Schemes Database
// Each scheme has eligibility rules, multilingual content, and document checklists

const schemes = [
  {
    id: "pm-kisan",
    name: {
      en: "PM Kisan Samman Nidhi",
      hi: "प्रधानमंत्री किसान सम्मान निधि",
      mr: "प्रधानमंत्री किसान सन्मान निधी",
      ta: "பிரதமர் கிசான் சம்மான் நிதி",
    },
    description: {
      en: "Direct income support of ₹6,000 per year to small and marginal farmer families, paid in 3 installments of ₹2,000 each.",
      hi: "छोटे और सीमांत किसान परिवारों को ₹6,000 प्रति वर्ष की सीधी आय सहायता, ₹2,000 की 3 किस्तों में।",
      mr: "लहान आणि अल्पभूधारक शेतकरी कुटुंबांना वार्षिक ₹6,000 थेट उत्पन्न सहाय्य, ₹2,000 च्या 3 हप्त्यांमध्ये।",
      ta: "சிறு மற்றும் குறு விவசாயி குடும்பங்களுக்கு ஆண்டுக்கு ₹6,000 நேரடி வருமான உதவி, ₹2,000 வீதம் 3 தவணைகளில்.",
    },
    benefits: {
      en: "₹6,000/year in bank account (3 installments of ₹2,000)",
      hi: "बैंक खाते में ₹6,000/वर्ष (₹2,000 की 3 किस्तें)",
      mr: "बँक खात्यात ₹6,000/वर्ष (₹2,000 चे 3 हप्ते)",
      ta: "வங்கிக் கணக்கில் ₹6,000/ஆண்டு (₹2,000 வீதம் 3 தவணைகள்)",
    },
    eligibility: {
      en: "Small and marginal farmers with cultivable land, annual family income below ₹2,00,000",
      hi: "खेती योग्य भूमि वाले छोटे और सीमांत किसान, वार्षिक पारिवारिक आय ₹2,00,000 से कम",
      mr: "लागवडयोग्य जमीन असलेले लहान व अल्पभूधारक शेतकरी, वार्षिक कौटुंबिक उत्पन्न ₹2,00,000 पेक्षा कमी",
      ta: "பயிரிடக்கூடிய நிலம் உள்ள சிறு மற்றும் குறு விவசாயிகள், ஆண்டு குடும்ப வருமானம் ₹2,00,000 க்கும் குறைவு",
    },
    checkEligibility: (profile) => {
      return (
        profile.occupation === "farmer" && profile.income <= 200000
      );
    },
    documents: {
      en: [
        "Aadhaar Card (original + photocopy)",
        "Land ownership documents / Land records (Khatauni/7-12 extract)",
        "Bank passbook (with IFSC code page)",
        "Passport-size photograph (2 copies)",
        "Self-declaration form",
      ],
      hi: [
        "आधार कार्ड (मूल + फोटोकॉपी)",
        "भूमि स्वामित्व दस्तावेज़ / भूमि रिकॉर्ड (खतौनी)",
        "बैंक पासबुक (IFSC कोड पेज सहित)",
        "पासपोर्ट साइज़ फोटो (2 प्रतियाँ)",
        "स्व-घोषणा पत्र",
      ],
      mr: [
        "आधार कार्ड (मूळ + झेरॉक्स)",
        "जमीन मालकी कागदपत्रे / 7-12 उतारा",
        "बँक पासबुक (IFSC कोड पेज सह)",
        "पासपोर्ट साइज फोटो (2 प्रती)",
        "स्वयंघोषणा पत्र",
      ],
      ta: [
        "ஆதார் அட்டை (அசல் + நகல்)",
        "நில உரிமை ஆவணங்கள் / நில பதிவுகள் (சிட்டா/அடங்கல்)",
        "வங்கி பாஸ்புக் (IFSC குறியீடு பக்கத்துடன்)",
        "பாஸ்போர்ட் அளவு புகைப்படம் (2 பிரதிகள்)",
        "சுய-அறிவிப்பு படிவம்",
      ],
    },
    office: {
      en: "Common Service Centre (CSC) / Block Development Office / Agriculture Department Office",
      hi: "कॉमन सर्विस सेंटर (CSC) / ब्लॉक विकास कार्यालय / कृषि विभाग कार्यालय",
      mr: "कॉमन सर्व्हिस सेंटर (CSC) / तालुका विकास कार्यालय / कृषी विभाग कार्यालय",
      ta: "பொது சேவை மையம் (CSC) / வட்டார வளர்ச்சி அலுவலகம் / வேளாண் துறை அலுவலகம்",
    },
  },

  {
    id: "pm-awas",
    name: {
      en: "PM Awas Yojana (PMAY)",
      hi: "प्रधानमंत्री आवास योजना (PMAY)",
      mr: "प्रधानमंत्री आवास योजना (PMAY)",
      ta: "பிரதமர் வீட்டுவசதி திட்டம் (PMAY)",
    },
    description: {
      en: "Affordable housing for economically weaker sections. Provides financial assistance for building or purchasing a house.",
      hi: "आर्थिक रूप से कमज़ोर वर्गों के लिए किफायती आवास। मकान बनाने या खरीदने के लिए वित्तीय सहायता।",
      mr: "आर्थिकदृष्ट्या दुर्बल घटकांसाठी परवडणारी गृहनिर्माण योजना. घर बांधणे किंवा खरेदी करण्यासाठी आर्थिक सहाय्य.",
      ta: "பொருளாதாரத்தில் நலிவுற்ற பிரிவினருக்கு மலிவு வீட்டுவசதி. வீடு கட்ட அல்லது வாங்க நிதி உதவி.",
    },
    benefits: {
      en: "Subsidy of ₹1.5 lakh to ₹2.67 lakh on home loan interest; up to ₹1.20 lakh grant for house construction",
      hi: "होम लोन ब्याज पर ₹1.5 लाख से ₹2.67 लाख की सब्सिडी; घर निर्माण के लिए ₹1.20 लाख तक अनुदान",
      mr: "गृहकर्ज व्याजावर ₹1.5 लाख ते ₹2.67 लाख सबसिडी; घरबांधणीसाठी ₹1.20 लाख पर्यंत अनुदान",
      ta: "வீட்டுக் கடன் வட்டியில் ₹1.5 லட்சம் முதல் ₹2.67 லட்சம் வரை மானியம்; வீடு கட்ட ₹1.20 லட்சம் வரை மானியம்",
    },
    eligibility: {
      en: "Annual family income up to ₹18 lakh (varies by category: EWS up to ₹3L, LIG up to ₹6L, MIG-I up to ₹12L, MIG-II up to ₹18L)",
      hi: "वार्षिक पारिवारिक आय ₹18 लाख तक (श्रेणी के अनुसार: EWS ₹3L तक, LIG ₹6L तक, MIG-I ₹12L तक, MIG-II ₹18L तक)",
      mr: "वार्षिक कौटुंबिक उत्पन्न ₹18 लाख पर्यंत (श्रेणीनुसार: EWS ₹3L पर्यंत, LIG ₹6L पर्यंत, MIG-I ₹12L पर्यंत, MIG-II ₹18L पर्यंत)",
      ta: "ஆண்டு குடும்ப வருமானம் ₹18 லட்சம் வரை (பிரிவு படி: EWS ₹3L வரை, LIG ₹6L வரை, MIG-I ₹12L வரை, MIG-II ₹18L வரை)",
    },
    checkEligibility: (profile) => {
      return profile.income <= 1800000;
    },
    documents: {
      en: [
        "Aadhaar Card of all family members",
        "Income certificate from Tehsildar/Revenue office",
        "Proof of land ownership (if applicable)",
        "Bank account details with passbook copy",
        "Caste certificate (if SC/ST/OBC)",
        "Photograph of existing house (if any)",
        "Affidavit stating no pucca house owned anywhere in India",
        "Passport-size photographs (4 copies)",
      ],
      hi: [
        "सभी परिवार के सदस्यों का आधार कार्ड",
        "तहसीलदार/राजस्व कार्यालय से आय प्रमाण पत्र",
        "भूमि स्वामित्व का प्रमाण (यदि लागू हो)",
        "बैंक खाता विवरण और पासबुक की प्रति",
        "जाति प्रमाण पत्र (यदि SC/ST/OBC)",
        "मौजूदा मकान का फोटो (यदि कोई हो)",
        "शपथ पत्र - भारत में कहीं भी पक्का मकान नहीं है",
        "पासपोर्ट साइज़ फोटो (4 प्रतियाँ)",
      ],
      mr: [
        "सर्व कुटुंब सदस्यांचे आधार कार्ड",
        "तहसीलदार/महसूल कार्यालयाचे उत्पन्न प्रमाणपत्र",
        "जमीन मालकीचा पुरावा (लागू असल्यास)",
        "बँक खाते तपशील व पासबुक प्रत",
        "जात प्रमाणपत्र (SC/ST/OBC असल्यास)",
        "विद्यमान घराचा फोटो (असल्यास)",
        "भारतात कुठेही पक्के घर नसल्याचे शपथपत्र",
        "पासपोर्ट साइज फोटो (4 प्रती)",
      ],
      ta: [
        "அனைத்து குடும்ப உறுப்பினர்களின் ஆதார் அட்டை",
        "வட்டாட்சியர்/வருவாய் அலுவலக வருமான சான்றிதழ்",
        "நில உரிமை ஆதாரம் (பொருந்தினால்)",
        "வங்கி கணக்கு விவரங்கள் மற்றும் பாஸ்புக் நகல்",
        "சாதி சான்றிதழ் (SC/ST/OBC எனில்)",
        "தற்போதைய வீட்டின் புகைப்படம் (இருந்தால்)",
        "இந்தியாவில் எங்கும் நிரந்தர வீடு இல்லை என்ற உறுதிமொழி",
        "பாஸ்போர்ட் அளவு புகைப்படம் (4 பிரதிகள்)",
      ],
    },
    office: {
      en: "Municipal Corporation / Nagar Palika / Gram Panchayat Office / Bank (for loan subsidy)",
      hi: "नगर निगम / नगर पालिका / ग्राम पंचायत कार्यालय / बैंक (लोन सब्सिडी के लिए)",
      mr: "महानगरपालिका / नगरपालिका / ग्रामपंचायत कार्यालय / बँक (कर्ज सबसिडीसाठी)",
      ta: "மாநகராட்சி / நகராட்சி / கிராம பஞ்சாயத்து அலுவலகம் / வங்கி (கடன் மானியத்திற்கு)",
    },
  },

  {
    id: "ayushman-bharat",
    name: {
      en: "Ayushman Bharat (PM-JAY)",
      hi: "आयुष्मान भारत (PM-JAY)",
      mr: "आयुष्मान भारत (PM-JAY)",
      ta: "ஆயுஷ்மான் பாரத் (PM-JAY)",
    },
    description: {
      en: "Free health insurance cover of ₹5 lakh per family per year for secondary and tertiary hospitalization at empanelled hospitals.",
      hi: "एम्पैनल्ड अस्पतालों में ₹5 लाख प्रति परिवार प्रति वर्ष का मुफ़्त स्वास्थ्य बीमा कवर।",
      mr: "एम्पॅनेल्ड रुग्णालयांमध्ये कुटुंबामागे वार्षिक ₹5 लाख मोफत आरोग्य विमा.",
      ta: "பட்டியலிடப்பட்ட மருத்துவமனைகளில் குடும்பத்திற்கு ஆண்டுக்கு ₹5 லட்சம் இலவச மருத்துவ காப்பீடு.",
    },
    benefits: {
      en: "₹5 lakh/year health insurance per family, cashless treatment at 25,000+ hospitals",
      hi: "प्रति परिवार ₹5 लाख/वर्ष स्वास्थ्य बीमा, 25,000+ अस्पतालों में कैशलेस इलाज",
      mr: "कुटुंबामागे ₹5 लाख/वर्ष आरोग्य विमा, 25,000+ रुग्णालयांमध्ये कॅशलेस उपचार",
      ta: "குடும்பத்திற்கு ₹5 லட்சம்/ஆண்டு மருத்துவ காப்பீடு, 25,000+ மருத்துவமனைகளில் பணமில்லா சிகிச்சை",
    },
    eligibility: {
      en: "Families identified in SECC data; annual income below ₹5,00,000; priority to BPL families",
      hi: "SECC डेटा में चिह्नित परिवार; वार्षिक आय ₹5,00,000 से कम; BPL परिवारों को प्राथमिकता",
      mr: "SECC डेटामध्ये ओळखले गेलेले कुटुंबे; वार्षिक उत्पन्न ₹5,00,000 पेक्षा कमी; BPL कुटुंबांना प्राधान्य",
      ta: "SECC தரவுகளில் அடையாளம் காணப்பட்ட குடும்பங்கள்; ஆண்டு வருமானம் ₹5,00,000 க்கும் குறைவு; BPL குடும்பங்களுக்கு முன்னுரிமை",
    },
    checkEligibility: (profile) => {
      return profile.income <= 500000;
    },
    documents: {
      en: [
        "Aadhaar Card (mandatory)",
        "Ration Card / BPL Card",
        "SECC (Socio-Economic Caste Census) inclusion letter (if available)",
        "Family ID / Parivar Pehchan Patra",
        "Mobile number linked to Aadhaar",
        "Any government-issued photo ID",
      ],
      hi: [
        "आधार कार्ड (अनिवार्य)",
        "राशन कार्ड / BPL कार्ड",
        "SECC (सामाजिक-आर्थिक जाति जनगणना) समावेश पत्र (यदि उपलब्ध)",
        "परिवार पहचान पत्र",
        "आधार से लिंक मोबाइल नंबर",
        "कोई भी सरकारी फोटो पहचान पत्र",
      ],
      mr: [
        "आधार कार्ड (अनिवार्य)",
        "रेशन कार्ड / BPL कार्ड",
        "SECC (सामाजिक-आर्थिक जात जनगणना) समावेश पत्र (उपलब्ध असल्यास)",
        "कुटुंब ओळखपत्र",
        "आधारशी लिंक केलेला मोबाइल नंबर",
        "कोणतेही सरकारी फोटो ओळखपत्र",
      ],
      ta: [
        "ஆதார் அட்டை (கட்டாயம்)",
        "ரேஷன் அட்டை / BPL அட்டை",
        "SECC (சமூக-பொருளாதார சாதி கணக்கெடுப்பு) சேர்க்கை கடிதம் (கிடைத்தால்)",
        "குடும்ப அடையாள அட்டை",
        "ஆதாருடன் இணைக்கப்பட்ட மொபைல் எண்",
        "ஏதேனும் அரசு வழங்கிய புகைப்பட அடையாள அட்டை",
      ],
    },
    office: {
      en: "Ayushman Bharat Arogya Mandir / District Hospital / Common Service Centre (CSC)",
      hi: "आयुष्मान भारत आरोग्य मंदिर / ज़िला अस्पताल / कॉमन सर्विस सेंटर (CSC)",
      mr: "आयुष्मान भारत आरोग्य मंदिर / जिल्हा रुग्णालय / कॉमन सर्व्हिस सेंटर (CSC)",
      ta: "ஆயுஷ்மான் பாரத் ஆரோக்ய மந்திர் / மாவட்ட மருத்துவமனை / பொது சேவை மையம் (CSC)",
    },
  },

  {
    id: "ujjwala",
    name: {
      en: "PM Ujjwala Yojana",
      hi: "प्रधानमंत्री उज्ज्वला योजना",
      mr: "प्रधानमंत्री उज्ज्वला योजना",
      ta: "பிரதமர் உஜ்வலா திட்டம்",
    },
    description: {
      en: "Free LPG connection to women from BPL (Below Poverty Line) households to replace unclean cooking fuels.",
      hi: "BPL (गरीबी रेखा से नीचे) परिवारों की महिलाओं को अशुद्ध ईंधन की जगह मुफ़्त LPG कनेक्शन।",
      mr: "BPL (दारिद्र्यरेषेखालील) कुटुंबातील महिलांना अशुद्ध इंधनाऐवजी मोफत LPG कनेक्शन.",
      ta: "BPL (வறுமைக் கோட்டிற்கு கீழ்) குடும்பங்களின் பெண்களுக்கு சுத்தமற்ற எரிபொருளை மாற்ற இலவச LPG இணைப்பு.",
    },
    benefits: {
      en: "Free LPG connection + first refill free + stove provided; subsidy on subsequent refills",
      hi: "मुफ़्त LPG कनेक्शन + पहला रिफिल मुफ़्त + चूल्हा मुफ़्त; बाद के रिफिल पर सब्सिडी",
      mr: "मोफत LPG कनेक्शन + पहिला रिफिल मोफत + शेगडी मोफत; पुढील रिफिलवर सबसिडी",
      ta: "இலவச LPG இணைப்பு + முதல் ரீஃபில் இலவசம் + அடுப்பு வழங்கப்படும்; அடுத்தடுத்த ரீஃபில்களில் மானியம்",
    },
    eligibility: {
      en: "Women from BPL households; age 18+; no existing LPG connection; annual income below ₹2,00,000",
      hi: "BPL परिवारों की महिलाएँ; उम्र 18+; कोई मौजूदा LPG कनेक्शन नहीं; वार्षिक आय ₹2,00,000 से कम",
      mr: "BPL कुटुंबातील महिला; वय 18+; सध्या LPG कनेक्शन नाही; वार्षिक उत्पन्न ₹2,00,000 पेक्षा कमी",
      ta: "BPL குடும்பங்களின் பெண்கள்; வயது 18+; தற்போதைய LPG இணைப்பு இல்லை; ஆண்டு வருமானம் ₹2,00,000 க்கும் குறைவு",
    },
    checkEligibility: (profile) => {
      return (
        profile.gender === "female" &&
        profile.age >= 18 &&
        profile.income <= 200000
      );
    },
    documents: {
      en: [
        "Aadhaar Card of the woman applicant",
        "BPL Ration Card / BPL Certificate",
        "Bank account passbook (in woman's name)",
        "Passport-size photograph (2 copies)",
        "Address proof (Voter ID / Electricity bill)",
        "Self-declaration of no existing LPG connection",
      ],
      hi: [
        "आवेदक महिला का आधार कार्ड",
        "BPL राशन कार्ड / BPL प्रमाण पत्र",
        "बैंक पासबुक (महिला के नाम पर)",
        "पासपोर्ट साइज़ फोटो (2 प्रतियाँ)",
        "पता प्रमाण (वोटर ID / बिजली बिल)",
        "कोई मौजूदा LPG कनेक्शन नहीं होने का स्व-घोषणा",
      ],
      mr: [
        "अर्जदार महिलेचे आधार कार्ड",
        "BPL रेशन कार्ड / BPL प्रमाणपत्र",
        "बँक पासबुक (महिलेच्या नावावर)",
        "पासपोर्ट साइज फोटो (2 प्रती)",
        "पत्ता पुरावा (मतदार ओळखपत्र / वीज बिल)",
        "सध्या LPG कनेक्शन नसल्याचे स्वयंघोषणा",
      ],
      ta: [
        "விண்ணப்பதாரரின் ஆதார் அட்டை",
        "BPL ரேஷன் அட்டை / BPL சான்றிதழ்",
        "வங்கி பாஸ்புக் (பெண்ணின் பெயரில்)",
        "பாஸ்போர்ட் அளவு புகைப்படம் (2 பிரதிகள்)",
        "முகவரி ஆதாரம் (வாக்காளர் அட்டை / மின்சார பில்)",
        "தற்போது LPG இணைப்பு இல்லை என்ற சுய-அறிவிப்பு",
      ],
    },
    office: {
      en: "Nearest LPG distributor (HP Gas / Indane / Bharat Gas) / Common Service Centre",
      hi: "निकटतम LPG वितरक (HP Gas / Indane / Bharat Gas) / कॉमन सर्विस सेंटर",
      mr: "जवळचा LPG वितरक (HP Gas / Indane / Bharat Gas) / कॉमन सर्व्हिस सेंटर",
      ta: "அருகிலுள்ள LPG விநியோகஸ்தர் (HP Gas / Indane / Bharat Gas) / பொது சேவை மையம்",
    },
  },

  {
    id: "mudra",
    name: {
      en: "PM Mudra Yojana (PMMY)",
      hi: "प्रधानमंत्री मुद्रा योजना (PMMY)",
      mr: "प्रधानमंत्री मुद्रा योजना (PMMY)",
      ta: "பிரதமர் முத்ரா திட்டம் (PMMY)",
    },
    description: {
      en: "Collateral-free loans up to ₹10 lakh for micro and small enterprises. Three categories: Shishu (up to ₹50K), Kishore (₹50K-5L), Tarun (₹5L-10L).",
      hi: "सूक्ष्म और छोटे उद्यमों के लिए ₹10 लाख तक बिना गारंटी लोन। तीन श्रेणियाँ: शिशु (₹50K तक), किशोर (₹50K-5L), तरुण (₹5L-10L)।",
      mr: "सूक्ष्म आणि लघु उद्योगांसाठी ₹10 लाख पर्यंत तारणमुक्त कर्ज. तीन श्रेणी: शिशु (₹50K पर्यंत), किशोर (₹50K-5L), तरुण (₹5L-10L).",
      ta: "நுண் மற்றும் சிறு நிறுவனங்களுக்கு ₹10 லட்சம் வரை பிணையமில்லா கடன். மூன்று பிரிவுகள்: சிசு (₹50K வரை), கிஷோர் (₹50K-5L), தரூண் (₹5L-10L).",
    },
    benefits: {
      en: "Collateral-free loans up to ₹10 lakh at subsidized interest rates for starting/expanding business",
      hi: "व्यापार शुरू/विस्तार के लिए सब्सिडी ब्याज दरों पर ₹10 लाख तक बिना गारंटी लोन",
      mr: "व्यवसाय सुरू/विस्तारासाठी सवलतीच्या व्याजदरावर ₹10 लाख पर्यंत तारणमुक्त कर्ज",
      ta: "தொழில் தொடங்க/விரிவாக்க மானிய வட்டி விகிதத்தில் ₹10 லட்சம் வரை பிணையமில்லா கடன்",
    },
    eligibility: {
      en: "Any Indian citizen starting or expanding a micro/small business; age 18+; self-employed or aspiring entrepreneurs",
      hi: "सूक्ष्म/छोटा व्यवसाय शुरू या विस्तार करने वाला कोई भी भारतीय नागरिक; उम्र 18+",
      mr: "सूक्ष्म/लघु व्यवसाय सुरू किंवा विस्तार करणारा कोणताही भारतीय नागरिक; वय 18+",
      ta: "நுண்/சிறு தொழில் தொடங்கும் அல்லது விரிவாக்கும் எந்த இந்திய குடிமகனும்; வயது 18+",
    },
    checkEligibility: (profile) => {
      return (
        profile.age >= 18 &&
        (profile.occupation === "self-employed" ||
          profile.occupation === "unemployed")
      );
    },
    documents: {
      en: [
        "Aadhaar Card",
        "PAN Card",
        "Business plan / Project report (brief outline of your business)",
        "Proof of business address (utility bill / rent agreement)",
        "Identity proof (Voter ID / Driving License / Passport)",
        "Passport-size photographs (3 copies)",
        "Bank statements (last 6 months)",
        "Caste certificate (if SC/ST - for priority processing)",
        "Quotation of machinery/equipment to be purchased (if any)",
      ],
      hi: [
        "आधार कार्ड",
        "पैन कार्ड",
        "व्यवसाय योजना / प्रोजेक्ट रिपोर्ट (व्यापार की रूपरेखा)",
        "व्यवसाय पते का प्रमाण (बिजली बिल / किराया अनुबंध)",
        "पहचान प्रमाण (वोटर ID / ड्राइविंग लाइसेंस / पासपोर्ट)",
        "पासपोर्ट साइज़ फोटो (3 प्रतियाँ)",
        "बैंक स्टेटमेंट (पिछले 6 महीने)",
        "जाति प्रमाण पत्र (SC/ST हो तो - प्राथमिकता के लिए)",
        "खरीदी जाने वाली मशीनरी/उपकरण का कोटेशन (यदि कोई हो)",
      ],
      mr: [
        "आधार कार्ड",
        "पॅन कार्ड",
        "व्यवसाय योजना / प्रकल्प अहवाल (व्यवसायाची रूपरेषा)",
        "व्यवसाय पत्त्याचा पुरावा (वीज बिल / भाडे करार)",
        "ओळख पुरावा (मतदार ओळखपत्र / ड्रायव्हिंग लायसन्स / पासपोर्ट)",
        "पासपोर्ट साइज फोटो (3 प्रती)",
        "बँक स्टेटमेंट (मागील 6 महिने)",
        "जात प्रमाणपत्र (SC/ST असल्यास - प्राधान्यासाठी)",
        "खरेदी करायच्या यंत्रसामग्रीचे कोटेशन (असल्यास)",
      ],
      ta: [
        "ஆதார் அட்டை",
        "பான் அட்டை",
        "வணிகத் திட்டம் / திட்ட அறிக்கை (தொழிலின் சுருக்கம்)",
        "வணிக முகவரி ஆதாரம் (மின்சார பில் / வாடகை ஒப்பந்தம்)",
        "அடையாள ஆதாரம் (வாக்காளர் அட்டை / ஓட்டுநர் உரிமம் / கடவுச்சீட்டு)",
        "பாஸ்போர்ட் அளவு புகைப்படம் (3 பிரதிகள்)",
        "வங்கி அறிக்கைகள் (கடந்த 6 மாதங்கள்)",
        "சாதி சான்றிதழ் (SC/ST எனில் - முன்னுரிமைக்கு)",
        "வாங்க வேண்டிய இயந்திரங்கள்/உபகரணங்களின் விலை மதிப்பீடு (இருந்தால்)",
      ],
    },
    office: {
      en: "Any nationalized bank / Regional Rural Bank / Micro Finance Institution / NBFC",
      hi: "कोई भी राष्ट्रीयकृत बैंक / क्षेत्रीय ग्रामीण बैंक / माइक्रो फाइनेंस संस्थान",
      mr: "कोणतीही राष्ट्रीयीकृत बँक / प्रादेशिक ग्रामीण बँक / मायक्रो फायनान्स संस्था",
      ta: "ஏதேனும் தேசியமயமாக்கப்பட்ட வங்கி / பிராந்திய கிராமப்புற வங்கி / நுண்நிதி நிறுவனம்",
    },
  },

  {
    id: "atal-pension",
    name: {
      en: "Atal Pension Yojana (APY)",
      hi: "अटल पेंशन योजना (APY)",
      mr: "अटल पेन्शन योजना (APY)",
      ta: "அடல் ஓய்வூதியத் திட்டம் (APY)",
    },
    description: {
      en: "Guaranteed pension of ₹1,000 to ₹5,000/month after age 60 for workers in the unorganized sector.",
      hi: "असंगठित क्षेत्र के कामगारों के लिए 60 वर्ष की उम्र के बाद ₹1,000 से ₹5,000/माह गारंटीड पेंशन।",
      mr: "असंघटित क्षेत्रातील कामगारांसाठी 60 वर्षांनंतर ₹1,000 ते ₹5,000/महिना हमी पेन्शन.",
      ta: "அமைப்புசாரா துறை தொழிலாளர்களுக்கு 60 வயதிற்குப் பிறகு ₹1,000 முதல் ₹5,000/மாதம் உத்தரவாத ஓய்வூதியம்.",
    },
    benefits: {
      en: "Monthly pension of ₹1,000-₹5,000 after 60; Government co-contributes 50% for 5 years (for eligible)",
      hi: "60 के बाद ₹1,000-₹5,000 मासिक पेंशन; सरकार 5 साल तक 50% योगदान (पात्र लोगों के लिए)",
      mr: "60 नंतर ₹1,000-₹5,000 मासिक पेन्शन; सरकार 5 वर्षे 50% योगदान (पात्रांसाठी)",
      ta: "60 வயதிற்குப் பிறகு ₹1,000-₹5,000 மாதாந்திர ஓய்வூதியம்; அரசு 5 ஆண்டுகள் 50% பங்களிப்பு (தகுதியானவர்களுக்கு)",
    },
    eligibility: {
      en: "Age 18-40; bank account holder; not an income tax payer; unorganized sector worker",
      hi: "उम्र 18-40; बैंक खाताधारक; आयकर दाता नहीं; असंगठित क्षेत्र का कामगार",
      mr: "वय 18-40; बँक खातेदार; आयकर भरणारा नाही; असंघटित क्षेत्रातील कामगार",
      ta: "வயது 18-40; வங்கி கணக்கு வைத்திருப்பவர்; வருமான வரி செலுத்தாதவர்; அமைப்புசாரா துறை தொழிலாளர்",
    },
    checkEligibility: (profile) => {
      return (
        profile.age >= 18 &&
        profile.age <= 40 &&
        profile.occupation !== "salaried" &&
        profile.income <= 500000
      );
    },
    documents: {
      en: [
        "Aadhaar Card",
        "Bank account passbook / Bank statement",
        "Mobile number (linked to bank account)",
        "Nominee details (name, age, relationship)",
        "APY registration form (available at bank)",
      ],
      hi: [
        "आधार कार्ड",
        "बैंक पासबुक / बैंक स्टेटमेंट",
        "मोबाइल नंबर (बैंक खाते से लिंक)",
        "नामांकित व्यक्ति का विवरण (नाम, उम्र, संबंध)",
        "APY पंजीकरण फॉर्म (बैंक में उपलब्ध)",
      ],
      mr: [
        "आधार कार्ड",
        "बँक पासबुक / बँक स्टेटमेंट",
        "मोबाइल नंबर (बँक खात्याशी लिंक)",
        "नामनिर्देशित व्यक्तीचे तपशील (नाव, वय, नाते)",
        "APY नोंदणी अर्ज (बँकेत उपलब्ध)",
      ],
      ta: [
        "ஆதார் அட்டை",
        "வங்கி பாஸ்புக் / வங்கி அறிக்கை",
        "மொபைல் எண் (வங்கிக் கணக்குடன் இணைக்கப்பட்டது)",
        "பயனாளி விவரங்கள் (பெயர், வயது, உறவுமுறை)",
        "APY பதிவு படிவம் (வங்கியில் கிடைக்கும்)",
      ],
    },
    office: {
      en: "Any bank branch where you have a savings account",
      hi: "कोई भी बैंक शाखा जहाँ आपका बचत खाता है",
      mr: "तुमचे बचत खाते असलेली कोणतीही बँक शाखा",
      ta: "உங்கள் சேமிப்பு கணக்கு உள்ள ஏதேனும் வங்கிக் கிளை",
    },
  },

  {
    id: "shram-yogi",
    name: {
      en: "PM Shram Yogi Maandhan (PMSYM)",
      hi: "प्रधानमंत्री श्रम योगी मानधन (PMSYM)",
      mr: "प्रधानमंत्री श्रम योगी मानधन (PMSYM)",
      ta: "பிரதமர் ஸ்ரம் யோகி மான்தன் (PMSYM)",
    },
    description: {
      en: "Pension scheme for unorganized workers — ₹3,000/month after age 60 with small monthly contributions.",
      hi: "असंगठित कामगारों के लिए पेंशन योजना — 60 वर्ष के बाद ₹3,000/माह, छोटे मासिक योगदान के साथ।",
      mr: "असंघटित कामगारांसाठी पेन्शन योजना — 60 वर्षांनंतर ₹3,000/महिना, लहान मासिक योगदानासह.",
      ta: "அமைப்புசாரா தொழிலாளர்களுக்கான ஓய்வூதியத் திட்டம் — 60 வயதிற்குப் பிறகு ₹3,000/மாதம், சிறிய மாதாந்திர பங்களிப்புடன்.",
    },
    benefits: {
      en: "₹3,000/month pension after age 60; Government matches your contribution equally",
      hi: "60 वर्ष के बाद ₹3,000/माह पेंशन; सरकार आपके बराबर योगदान करती है",
      mr: "60 वर्षांनंतर ₹3,000/महिना पेन्शन; सरकार तुमच्या योगदानाइतकेच योगदान देते",
      ta: "60 வயதிற்குப் பிறகு ₹3,000/மாதம் ஓய்வூதியம்; அரசு உங்கள் பங்களிப்புக்கு சமமாக பங்களிக்கிறது",
    },
    eligibility: {
      en: "Age 18-40; monthly income ₹15,000 or less; unorganized worker (street vendor, domestic worker, rickshaw puller, etc.)",
      hi: "उम्र 18-40; मासिक आय ₹15,000 या कम; असंगठित कामगार (ठेला लगाने वाले, घरेलू कामगार, रिक्शा चालक आदि)",
      mr: "वय 18-40; मासिक उत्पन्न ₹15,000 किंवा कमी; असंघटित कामगार (फेरीवाले, घरगुती कामगार, रिक्षाचालक इ.)",
      ta: "வயது 18-40; மாத வருமானம் ₹15,000 அல்லது அதற்கும் குறைவு; அமைப்புசாரா தொழிலாளர் (தெரு வியாபாரி, வீட்டு வேலையாள், ரிக்ஷா ஓட்டுநர் போன்றவர்கள்)",
    },
    checkEligibility: (profile) => {
      return (
        profile.age >= 18 &&
        profile.age <= 40 &&
        profile.income <= 180000 &&
        (profile.occupation === "labourer" ||
          profile.occupation === "self-employed" ||
          profile.occupation === "homemaker")
      );
    },
    documents: {
      en: [
        "Aadhaar Card",
        "Savings bank account passbook / IFSC details",
        "Mobile number",
        "PMSYM registration form (at CSC)",
      ],
      hi: [
        "आधार कार्ड",
        "बचत बैंक खाता पासबुक / IFSC विवरण",
        "मोबाइल नंबर",
        "PMSYM पंजीकरण फॉर्म (CSC पर)",
      ],
      mr: [
        "आधार कार्ड",
        "बचत बँक खाते पासबुक / IFSC तपशील",
        "मोबाइल नंबर",
        "PMSYM नोंदणी अर्ज (CSC वर)",
      ],
      ta: [
        "ஆதார் அட்டை",
        "சேமிப்பு வங்கி கணக்கு பாஸ்புக் / IFSC விவரங்கள்",
        "மொபைல் எண்",
        "PMSYM பதிவு படிவம் (CSC-ல்)",
      ],
    },
    office: {
      en: "Common Service Centre (CSC) / Nearest LIC office",
      hi: "कॉमन सर्विस सेंटर (CSC) / निकटतम LIC कार्यालय",
      mr: "कॉमन सर्व्हिस सेंटर (CSC) / जवळचे LIC कार्यालय",
      ta: "பொது சேவை மையம் (CSC) / அருகிலுள்ள LIC அலுவலகம்",
    },
  },

  {
    id: "vishwakarma",
    name: {
      en: "PM Vishwakarma Yojana",
      hi: "प्रधानमंत्री विश्वकर्मा योजना",
      mr: "प्रधानमंत्री विश्वकर्मा योजना",
      ta: "பிரதமர் விஸ்வகர்மா திட்டம்",
    },
    description: {
      en: "Support for traditional artisans and craftspeople — training, toolkit, credit access and marketing support.",
      hi: "पारंपरिक कारीगरों और शिल्पकारों के लिए सहायता — प्रशिक्षण, टूलकिट, ऋण और विपणन सहायता।",
      mr: "पारंपरिक कारागीर आणि शिल्पकारांसाठी सहाय्य — प्रशिक्षण, टूलकिट, कर्ज आणि विपणन सहाय्य.",
      ta: "பாரம்பரிய கைவினைஞர்கள் மற்றும் சிற்பிகளுக்கு ஆதரவு — பயிற்சி, கருவித்தொகுப்பு, கடன் மற்றும் சந்தைப்படுத்தல் ஆதரவு.",
    },
    benefits: {
      en: "Free skill training + ₹15,000 toolkit grant + loans up to ₹3 lakh at 5% interest + digital marketing support",
      hi: "मुफ़्त कौशल प्रशिक्षण + ₹15,000 टूलकिट अनुदान + 5% ब्याज पर ₹3 लाख तक लोन + डिजिटल मार्केटिंग सहायता",
      mr: "मोफत कौशल्य प्रशिक्षण + ₹15,000 टूलकिट अनुदान + 5% व्याजावर ₹3 लाख पर्यंत कर्ज + डिजिटल मार्केटिंग सहाय्य",
      ta: "இலவச திறன் பயிற்சி + ₹15,000 கருவித்தொகுப்பு மானியம் + 5% வட்டியில் ₹3 லட்சம் வரை கடன் + டிஜிட்டல் சந்தைப்படுத்தல் ஆதரவு",
    },
    eligibility: {
      en: "Traditional artisans/craftspeople (carpenter, blacksmith, goldsmith, potter, weaver, cobbler, mason, etc.); age 18+; working with hands and tools",
      hi: "पारंपरिक कारीगर/शिल्पकार (बढ़ई, लोहार, सुनार, कुम्हार, बुनकर, मोची, राजमिस्त्री आदि); उम्र 18+",
      mr: "पारंपरिक कारागीर/शिल्पकार (सुतार, लोहार, सोनार, कुंभार, विणकर, चर्मकार, गवंडी इ.); वय 18+",
      ta: "பாரம்பரிய கைவினைஞர்/சிற்பி (தச்சர், கொல்லர், பொற்கொல்லர், குயவர், நெசவாளர், செருப்புத் தைப்பவர், கொத்தனார் போன்றவர்கள்); வயது 18+",
    },
    checkEligibility: (profile) => {
      return profile.age >= 18 && profile.occupation === "artisan";
    },
    documents: {
      en: [
        "Aadhaar Card",
        "Ration Card",
        "Bank account passbook",
        "Mobile number linked to Aadhaar",
        "Passport-size photographs (3 copies)",
        "Self-certification of being a traditional artisan",
        "Caste certificate (if applicable)",
        "Certificate from Gram Panchayat / Urban Local Body verifying trade",
      ],
      hi: [
        "आधार कार्ड",
        "राशन कार्ड",
        "बैंक पासबुक",
        "आधार से लिंक मोबाइल नंबर",
        "पासपोर्ट साइज़ फोटो (3 प्रतियाँ)",
        "पारंपरिक कारीगर होने का स्व-प्रमाण पत्र",
        "जाति प्रमाण पत्र (यदि लागू)",
        "ग्राम पंचायत / शहरी स्थानीय निकाय से व्यापार सत्यापन प्रमाण पत्र",
      ],
      mr: [
        "आधार कार्ड",
        "रेशन कार्ड",
        "बँक पासबुक",
        "आधारशी लिंक केलेला मोबाइल नंबर",
        "पासपोर्ट साइज फोटो (3 प्रती)",
        "पारंपरिक कारागीर असल्याचे स्वयं-प्रमाणपत्र",
        "जात प्रमाणपत्र (लागू असल्यास)",
        "ग्रामपंचायत / शहरी स्थानिक स्वराज्य संस्थेकडून व्यापार सत्यापन प्रमाणपत्र",
      ],
      ta: [
        "ஆதார் அட்டை",
        "ரேஷன் அட்டை",
        "வங்கி பாஸ்புக்",
        "ஆதாருடன் இணைக்கப்பட்ட மொபைல் எண்",
        "பாஸ்போர்ட் அளவு புகைப்படம் (3 பிரதிகள்)",
        "பாரம்பரிய கைவினைஞர் என்ற சுய-சான்றிதழ்",
        "சாதி சான்றிதழ் (பொருந்தினால்)",
        "கிராம பஞ்சாயத்து / நகர்ப்புற உள்ளாட்சி அமைப்பிலிருந்து தொழில் சான்றிதழ்",
      ],
    },
    office: {
      en: "Common Service Centre (CSC) / District Industries Centre (DIC) / PM Vishwakarma Portal online",
      hi: "कॉमन सर्विस सेंटर (CSC) / जिला उद्योग केंद्र (DIC) / PM विश्वकर्मा पोर्टल ऑनलाइन",
      mr: "कॉमन सर्व्हिस सेंटर (CSC) / जिल्हा उद्योग केंद्र (DIC) / PM विश्वकर्मा पोर्टल ऑनलाइन",
      ta: "பொது சேவை மையம் (CSC) / மாவட்ட தொழிற்சாலைகள் மையம் (DIC) / PM விஸ்வகர்மா இணையதளம்",
    },
  },

  {
    id: "sukanya",
    name: {
      en: "Sukanya Samriddhi Yojana",
      hi: "सुकन्या समृद्धि योजना",
      mr: "सुकन्या समृद्धी योजना",
      ta: "சுகன்யா சம்ரிதி திட்டம்",
    },
    description: {
      en: "Savings scheme for the girl child with high interest rate and tax benefits. Account can be opened for girls below 10 years.",
      hi: "बालिकाओं के लिए उच्च ब्याज दर और कर लाभ वाली बचत योजना। 10 वर्ष से कम उम्र की बालिकाओं के लिए खाता खोला जा सकता है।",
      mr: "मुलींसाठी उच्च व्याजदर आणि कर सवलतीसह बचत योजना. 10 वर्षांपेक्षा कमी वयाच्या मुलींसाठी खाते उघडता येते.",
      ta: "பெண் குழந்தைகளுக்கான உயர் வட்டி விகிதம் மற்றும் வரி சலுகைகளுடன் கூடிய சேமிப்புத் திட்டம். 10 வயதிற்குட்பட்ட பெண்களுக்கு கணக்கு தொடங்கலாம்.",
    },
    benefits: {
      en: "~8% interest rate; tax-free returns; ₹250 minimum deposit; matures when girl turns 21",
      hi: "~8% ब्याज दर; कर-मुक्त रिटर्न; न्यूनतम ₹250 जमा; बालिका 21 वर्ष की होने पर परिपक्व",
      mr: "~8% व्याजदर; करमुक्त परतावा; किमान ₹250 ठेव; मुलगी 21 वर्षांची झाल्यावर परिपक्व",
      ta: "~8% வட்டி விகிதம்; வரி இல்லா வருமானம்; குறைந்தபட்சம் ₹250 வைப்பு; பெண் 21 வயது ஆனபோது முதிர்வு",
    },
    eligibility: {
      en: "Parents/guardians of a girl child below 10 years of age; Indian resident",
      hi: "10 वर्ष से कम उम्र की बालिका के माता-पिता/अभिभावक; भारतीय निवासी",
      mr: "10 वर्षांपेक्षा कमी वयाच्या मुलीचे पालक/पालनकर्ते; भारतीय निवासी",
      ta: "10 வயதிற்குட்பட்ட பெண் குழந்தையின் பெற்றோர்/பாதுகாவலர்; இந்திய குடியிருப்பாளர்",
    },
    checkEligibility: (profile) => {
      // Parents of any age can open for their daughter; most relevant for homemakers/families
      return profile.age >= 18 && profile.age <= 60;
    },
    documents: {
      en: [
        "Birth certificate of the girl child",
        "Aadhaar Card of the girl child (if available)",
        "Aadhaar Card of the parent/guardian",
        "Address proof of the parent/guardian",
        "Passport-size photograph of parent and girl child",
        "PAN Card of the parent/guardian (for deposits over ₹50,000)",
        "SSY account opening form (available at bank/post office)",
      ],
      hi: [
        "बालिका का जन्म प्रमाण पत्र",
        "बालिका का आधार कार्ड (यदि उपलब्ध)",
        "माता-पिता/अभिभावक का आधार कार्ड",
        "माता-पिता/अभिभावक का पता प्रमाण",
        "माता-पिता और बालिका का पासपोर्ट साइज़ फोटो",
        "माता-पिता/अभिभावक का पैन कार्ड (₹50,000 से ज़्यादा जमा के लिए)",
        "SSY खाता खोलने का फॉर्म (बैंक/डाकघर में उपलब्ध)",
      ],
      mr: [
        "मुलीचा जन्म दाखला",
        "मुलीचे आधार कार्ड (उपलब्ध असल्यास)",
        "पालक/पालनकर्त्यांचे आधार कार्ड",
        "पालक/पालनकर्त्यांचा पत्ता पुरावा",
        "पालक आणि मुलीचे पासपोर्ट साइज फोटो",
        "पालक/पालनकर्त्यांचे पॅन कार्ड (₹50,000 पेक्षा जास्त ठेवीसाठी)",
        "SSY खाते उघडण्याचा अर्ज (बँक/टपाल कार्यालयात उपलब्ध)",
      ],
      ta: [
        "பெண் குழந்தையின் பிறப்புச் சான்றிதழ்",
        "பெண் குழந்தையின் ஆதார் அட்டை (கிடைத்தால்)",
        "பெற்றோர்/பாதுகாவலரின் ஆதார் அட்டை",
        "பெற்றோர்/பாதுகாவலரின் முகவரி ஆதாரம்",
        "பெற்றோர் மற்றும் பெண் குழந்தையின் பாஸ்போர்ட் அளவு புகைப்படம்",
        "பெற்றோர்/பாதுகாவலரின் பான் அட்டை (₹50,000 க்கு மேல் வைப்புக்கு)",
        "SSY கணக்கு திறக்கும் படிவம் (வங்கி/தபால் நிலையத்தில் கிடைக்கும்)",
      ],
    },
    office: {
      en: "Any Post Office / Authorized Bank branch (SBI, PNB, BOB, etc.)",
      hi: "कोई भी डाकघर / अधिकृत बैंक शाखा (SBI, PNB, BOB आदि)",
      mr: "कोणतेही टपाल कार्यालय / अधिकृत बँक शाखा (SBI, PNB, BOB इ.)",
      ta: "ஏதேனும் தபால் நிலையம் / அங்கீகரிக்கப்பட்ட வங்கிக் கிளை (SBI, PNB, BOB போன்றவை)",
    },
  },

  {
    id: "kaushal-vikas",
    name: {
      en: "PM Kaushal Vikas Yojana (PMKVY)",
      hi: "प्रधानमंत्री कौशल विकास योजना (PMKVY)",
      mr: "प्रधानमंत्री कौशल विकास योजना (PMKVY)",
      ta: "பிரதமர் கௌஷல் விகாஸ் திட்டம் (PMKVY)",
    },
    description: {
      en: "Free skill training and certification for youth to improve employability. Covers 40+ sectors like IT, healthcare, construction, etc.",
      hi: "युवाओं की रोजगार क्षमता बढ़ाने के लिए मुफ़्त कौशल प्रशिक्षण और प्रमाणन। IT, स्वास्थ्य, निर्माण आदि 40+ क्षेत्रों को कवर करता है।",
      mr: "तरुणांच्या रोजगारक्षमतेसाठी मोफत कौशल्य प्रशिक्षण आणि प्रमाणन. IT, आरोग्य, बांधकाम इ. 40+ क्षेत्रे.",
      ta: "இளைஞர்களின் வேலைவாய்ப்புத் திறனை மேம்படுத்த இலவச திறன் பயிற்சி மற்றும் சான்றிதழ். IT, மருத்துவம், கட்டுமானம் போன்ற 40+ துறைகள்.",
    },
    benefits: {
      en: "Free skill training (150-300 hours) + government-recognized certificate + ₹8,000 reward on completion + placement assistance",
      hi: "मुफ़्त कौशल प्रशिक्षण (150-300 घंटे) + सरकारी मान्यता प्राप्त प्रमाण पत्र + पूर्णता पर ₹8,000 इनाम + नौकरी सहायता",
      mr: "मोफत कौशल्य प्रशिक्षण (150-300 तास) + सरकार मान्यताप्राप्त प्रमाणपत्र + पूर्णतेवर ₹8,000 बक्षीस + नोकरी सहाय्य",
      ta: "இலவச திறன் பயிற்சி (150-300 மணி நேரம்) + அரசு அங்கீகார சான்றிதழ் + நிறைவு பெற்றவுடன் ₹8,000 வெகுமதி + வேலை வாய்ப்பு உதவி",
    },
    eligibility: {
      en: "Indian youth aged 15-45; school/college dropout or unemployed or seeking skill upgrade",
      hi: "15-45 वर्ष के भारतीय युवा; स्कूल/कॉलेज छोड़ चुके या बेरोजगार या कौशल उन्नयन चाहने वाले",
      mr: "15-45 वर्षे वयाचे भारतीय तरुण; शाळा/महाविद्यालय सोडलेले किंवा बेरोजगार किंवा कौशल्य सुधारणा इच्छुक",
      ta: "15-45 வயதுடைய இந்திய இளைஞர்கள்; பள்ளி/கல்லூரி இடைநிறுத்தம் செய்தவர் அல்லது வேலையில்லாதவர் அல்லது திறன் மேம்படுத்த விரும்புபவர்",
    },
    checkEligibility: (profile) => {
      return (
        profile.age >= 15 &&
        profile.age <= 45 &&
        (profile.occupation === "student" ||
          profile.occupation === "unemployed" ||
          profile.occupation === "labourer")
      );
    },
    documents: {
      en: [
        "Aadhaar Card",
        "Bank account details",
        "Passport-size photographs (2 copies)",
        "Educational certificates (if any)",
        "Mobile number",
        "PMKVY enrollment form (at training centre)",
      ],
      hi: [
        "आधार कार्ड",
        "बैंक खाता विवरण",
        "पासपोर्ट साइज़ फोटो (2 प्रतियाँ)",
        "शैक्षिक प्रमाण पत्र (यदि कोई हो)",
        "मोबाइल नंबर",
        "PMKVY नामांकन फॉर्म (प्रशिक्षण केंद्र पर)",
      ],
      mr: [
        "आधार कार्ड",
        "बँक खाते तपशील",
        "पासपोर्ट साइज फोटो (2 प्रती)",
        "शैक्षणिक प्रमाणपत्रे (असल्यास)",
        "मोबाइल नंबर",
        "PMKVY नोंदणी अर्ज (प्रशिक्षण केंद्रावर)",
      ],
      ta: [
        "ஆதார் அட்டை",
        "வங்கி கணக்கு விவரங்கள்",
        "பாஸ்போர்ட் அளவு புகைப்படம் (2 பிரதிகள்)",
        "கல்வி சான்றிதழ்கள் (இருந்தால்)",
        "மொபைல் எண்",
        "PMKVY பதிவு படிவம் (பயிற்சி மையத்தில்)",
      ],
    },
    office: {
      en: "Nearest PMKVY Training Centre (find on skillindia.gov.in) / District Skill Committee office",
      hi: "निकटतम PMKVY प्रशिक्षण केंद्र (skillindia.gov.in पर खोजें) / जिला कौशल समिति कार्यालय",
      mr: "जवळचे PMKVY प्रशिक्षण केंद्र (skillindia.gov.in वर शोधा) / जिल्हा कौशल्य समिती कार्यालय",
      ta: "அருகிலுள்ள PMKVY பயிற்சி மையம் (skillindia.gov.in-ல் கண்டறியவும்) / மாவட்ட திறன் குழு அலுவலகம்",
    },
  },

  {
    id: "standup-india",
    name: {
      en: "Stand Up India Scheme",
      hi: "स्टैंड अप इंडिया योजना",
      mr: "स्टँड अप इंडिया योजना",
      ta: "ஸ்டாண்ட் அப் இந்தியா திட்டம்",
    },
    description: {
      en: "Bank loans between ₹10 lakh and ₹1 crore for SC/ST and women entrepreneurs to set up greenfield enterprises.",
      hi: "SC/ST और महिला उद्यमियों को नया उद्यम शुरू करने के लिए ₹10 लाख से ₹1 करोड़ तक बैंक लोन।",
      mr: "SC/ST आणि महिला उद्योजकांना नवीन उद्योग सुरू करण्यासाठी ₹10 लाख ते ₹1 कोटी बँक कर्ज.",
      ta: "SC/ST மற்றும் பெண் தொழில்முனைவோர் புதிய நிறுவனம் தொடங்க ₹10 லட்சம் முதல் ₹1 கோடி வரை வங்கிக் கடன்.",
    },
    benefits: {
      en: "Loans ₹10 lakh to ₹1 crore at competitive rates; composite loan covering working capital and term loan",
      hi: "प्रतिस्पर्धी दरों पर ₹10 लाख से ₹1 करोड़ तक लोन; कार्यशील पूंजी और टर्म लोन कवर करने वाला समग्र लोन",
      mr: "स्पर्धात्मक दरांवर ₹10 लाख ते ₹1 कोटी कर्ज; खेळते भांडवल आणि मुदत कर्ज कव्हर करणारे एकत्रित कर्ज",
      ta: "போட்டி விகிதத்தில் ₹10 லட்சம் முதல் ₹1 கோடி வரை கடன்; செயல் மூலதனம் மற்றும் கால கடன் உள்ளடக்கிய கூட்டு கடன்",
    },
    eligibility: {
      en: "SC/ST or Women entrepreneurs; age 18+; setting up a new (greenfield) enterprise in manufacturing, services, or trading; not a defaulter to any bank",
      hi: "SC/ST या महिला उद्यमी; उम्र 18+; विनिर्माण, सेवा, या व्यापार में नया उद्यम शुरू करना; किसी बैंक में डिफॉल्टर नहीं",
      mr: "SC/ST किंवा महिला उद्योजक; वय 18+; उत्पादन, सेवा किंवा व्यापारात नवीन उद्योग सुरू करणे; कोणत्याही बँकेत थकबाकीदार नाही",
      ta: "SC/ST அல்லது பெண் தொழில்முனைவோர்; வயது 18+; உற்பத்தி, சேவை அல்லது வர்த்தகத்தில் புதிய நிறுவனம் தொடங்குதல்; எந்த வங்கியிலும் நிலுவையில் இல்லை",
    },
    checkEligibility: (profile) => {
      return (
        profile.age >= 18 &&
        (profile.category === "sc" ||
          profile.category === "st" ||
          profile.gender === "female") &&
        (profile.occupation === "self-employed" ||
          profile.occupation === "unemployed")
      );
    },
    documents: {
      en: [
        "Aadhaar Card",
        "PAN Card",
        "Caste certificate (for SC/ST applicants)",
        "Business plan / Project report",
        "Proof of business address",
        "Identity proof (Voter ID / Driving License)",
        "Bank statements (last 6 months)",
        "Passport-size photographs (4 copies)",
        "ITR (Income Tax Return) for last 2 years (if applicable)",
        "Quotation for machinery/equipment",
        "Partnership deed / Company registration (if applicable)",
      ],
      hi: [
        "आधार कार्ड",
        "पैन कार्ड",
        "जाति प्रमाण पत्र (SC/ST आवेदकों के लिए)",
        "व्यवसाय योजना / प्रोजेक्ट रिपोर्ट",
        "व्यवसाय पते का प्रमाण",
        "पहचान प्रमाण (वोटर ID / ड्राइविंग लाइसेंस)",
        "बैंक स्टेटमेंट (पिछले 6 महीने)",
        "पासपोर्ट साइज़ फोटो (4 प्रतियाँ)",
        "ITR (आयकर रिटर्न) पिछले 2 साल (यदि लागू)",
        "मशीनरी/उपकरण का कोटेशन",
        "साझेदारी विलेख / कंपनी पंजीकरण (यदि लागू)",
      ],
      mr: [
        "आधार कार्ड",
        "पॅन कार्ड",
        "जात प्रमाणपत्र (SC/ST अर्जदारांसाठी)",
        "व्यवसाय योजना / प्रकल्प अहवाल",
        "व्यवसाय पत्त्याचा पुरावा",
        "ओळख पुरावा (मतदार ओळखपत्र / ड्रायव्हिंग लायसन्स)",
        "बँक स्टेटमेंट (मागील 6 महिने)",
        "पासपोर्ट साइज फोटो (4 प्रती)",
        "ITR (आयकर विवरणपत्र) मागील 2 वर्षे (लागू असल्यास)",
        "यंत्रसामग्री/उपकरणाचे कोटेशन",
        "भागीदारी करारनामा / कंपनी नोंदणी (लागू असल्यास)",
      ],
      ta: [
        "ஆதார் அட்டை",
        "பான் அட்டை",
        "சாதி சான்றிதழ் (SC/ST விண்ணப்பதாரர்களுக்கு)",
        "வணிகத் திட்டம் / திட்ட அறிக்கை",
        "வணிக முகவரி ஆதாரம்",
        "அடையாள ஆதாரம் (வாக்காளர் அட்டை / ஓட்டுநர் உரிமம்)",
        "வங்கி அறிக்கைகள் (கடந்த 6 மாதங்கள்)",
        "பாஸ்போர்ட் அளவு புகைப்படம் (4 பிரதிகள்)",
        "ITR (வருமான வரி தாக்கல்) கடந்த 2 ஆண்டுகள் (பொருந்தினால்)",
        "இயந்திரங்கள்/உபகரணங்களின் விலை மதிப்பீடு",
        "கூட்டாண்மை ஒப்பந்தம் / நிறுவன பதிவு (பொருந்தினால்)",
      ],
    },
    office: {
      en: "Any Scheduled Commercial Bank branch / Stand Up India portal (standupmitra.in)",
      hi: "कोई भी अनुसूचित वाणिज्यिक बैंक शाखा / स्टैंड अप इंडिया पोर्टल (standupmitra.in)",
      mr: "कोणतीही अनुसूचित व्यापारी बँक शाखा / स्टँड अप इंडिया पोर्टल (standupmitra.in)",
      ta: "ஏதேனும் அட்டவணை வணிக வங்கிக் கிளை / ஸ்டாண்ட் அப் இந்தியா இணையதளம் (standupmitra.in)",
    },
  },

  {
    id: "apprenticeship",
    name: {
      en: "National Apprenticeship Promotion Scheme (NAPS)",
      hi: "राष्ट्रीय शिक्षुता प्रोत्साहन योजना (NAPS)",
      mr: "राष्ट्रीय शिक्षणार्थी प्रोत्साहन योजना (NAPS)",
      ta: "தேசிய பயிலுநர் ஊக்குவிப்புத் திட்டம் (NAPS)",
    },
    description: {
      en: "Apprenticeship opportunities for youth with stipend support. Government shares 25% of stipend (up to ₹1,500/month) with employers.",
      hi: "युवाओं के लिए वृत्तिका सहायता के साथ शिक्षुता अवसर। सरकार नियोक्ता के साथ 25% वृत्तिका (₹1,500/माह तक) साझा करती है।",
      mr: "तरुणांसाठी वेतन सहाय्यासह शिक्षणार्थी संधी. सरकार नियोक्त्यासोबत 25% वेतन (₹1,500/महिना पर्यंत) सामायिक करते.",
      ta: "இளைஞர்களுக்கான உதவித்தொகை ஆதரவுடன் பயிலுநர் வாய்ப்புகள். அரசு ₹1,500/மாதம் வரை 25% உதவித்தொகையை முதலாளிகளுடன் பகிர்ந்து கொள்கிறது.",
    },
    benefits: {
      en: "Monthly stipend + on-the-job training + government-recognized certificate + better employment prospects",
      hi: "मासिक वृत्तिका + कार्य-स्थल प्रशिक्षण + सरकारी मान्यता प्राप्त प्रमाण पत्र + बेहतर रोजगार संभावनाएँ",
      mr: "मासिक वेतन + कामावरील प्रशिक्षण + सरकार मान्यताप्राप्त प्रमाणपत्र + चांगल्या नोकरी संधी",
      ta: "மாதாந்திர உதவித்தொகை + பணியிட பயிற்சி + அரசு அங்கீகார சான்றிதழ் + சிறந்த வேலைவாய்ப்பு வாய்ப்புகள்",
    },
    eligibility: {
      en: "Youth aged 14-35 (relaxation for SC/ST/PwD); minimum 5th pass (varies by trade); Indian resident",
      hi: "14-35 वर्ष के युवा (SC/ST/PwD के लिए छूट); न्यूनतम 5वीं पास (व्यापार के अनुसार); भारतीय निवासी",
      mr: "14-35 वर्षे वयाचे तरुण (SC/ST/PwD साठी सवलत); किमान 5 वी पास (व्यवसायानुसार); भारतीय निवासी",
      ta: "14-35 வயதுடைய இளைஞர்கள் (SC/ST/PwD-க்கு தளர்வு); குறைந்தபட்சம் 5வது தேர்ச்சி (தொழில் படி); இந்திய குடியிருப்பாளர்",
    },
    checkEligibility: (profile) => {
      return (
        profile.age >= 14 &&
        profile.age <= 35 &&
        (profile.occupation === "student" || profile.occupation === "unemployed")
      );
    },
    documents: {
      en: [
        "Aadhaar Card",
        "Educational certificates (marksheets)",
        "Passport-size photographs (3 copies)",
        "Bank account passbook",
        "Medical fitness certificate",
        "Caste certificate (if SC/ST/OBC)",
        "Disability certificate (if PwD)",
        "Registration on apprenticeshipindia.gov.in",
      ],
      hi: [
        "आधार कार्ड",
        "शैक्षिक प्रमाण पत्र (मार्कशीट)",
        "पासपोर्ट साइज़ फोटो (3 प्रतियाँ)",
        "बैंक पासबुक",
        "चिकित्सा स्वस्थता प्रमाण पत्र",
        "जाति प्रमाण पत्र (SC/ST/OBC हो तो)",
        "विकलांगता प्रमाण पत्र (यदि PwD)",
        "apprenticeshipindia.gov.in पर पंजीकरण",
      ],
      mr: [
        "आधार कार्ड",
        "शैक्षणिक प्रमाणपत्रे (गुणपत्रिका)",
        "पासपोर्ट साइज फोटो (3 प्रती)",
        "बँक पासबुक",
        "वैद्यकीय तंदुरुस्ती प्रमाणपत्र",
        "जात प्रमाणपत्र (SC/ST/OBC असल्यास)",
        "अपंगत्व प्रमाणपत्र (PwD असल्यास)",
        "apprenticeshipindia.gov.in वर नोंदणी",
      ],
      ta: [
        "ஆதார் அட்டை",
        "கல்வி சான்றிதழ்கள் (மதிப்பெண் பட்டியல்)",
        "பாஸ்போர்ட் அளவு புகைப்படம் (3 பிரதிகள்)",
        "வங்கி பாஸ்புக்",
        "மருத்துவ தகுதி சான்றிதழ்",
        "சாதி சான்றிதழ் (SC/ST/OBC எனில்)",
        "இயலாமை சான்றிதழ் (PwD எனில்)",
        "apprenticeshipindia.gov.in-ல் பதிவு",
      ],
    },
    office: {
      en: "apprenticeshipindia.gov.in (online) / Regional Directorate of Apprenticeship Training / Nearest ITI",
      hi: "apprenticeshipindia.gov.in (ऑनलाइन) / क्षेत्रीय शिक्षुता प्रशिक्षण निदेशालय / निकटतम ITI",
      mr: "apprenticeshipindia.gov.in (ऑनलाइन) / प्रादेशिक शिक्षणार्थी प्रशिक्षण संचालनालय / जवळचे ITI",
      ta: "apprenticeshipindia.gov.in (ஆன்லைன்) / பிராந்திய பயிலுநர் பயிற்சி இயக்குநரகம் / அருகிலுள்ள ITI",
    },
  },

  {
    id: "jan-dhan",
    name: {
      en: "PM Jan Dhan Yojana (PMJDY)",
      hi: "प्रधानमंत्री जन धन योजना (PMJDY)",
      mr: "प्रधानमंत्री जन धन योजना (PMJDY)",
      ta: "பிரதமர் ஜன் தன் திட்டம் (PMJDY)",
    },
    description: {
      en: "Zero-balance bank account with RuPay debit card, accidental insurance of ₹2 lakh, and overdraft facility up to ₹10,000.",
      hi: "शून्य बैलेंस बैंक खाता, RuPay डेबिट कार्ड, ₹2 लाख का दुर्घटना बीमा, और ₹10,000 तक ओवरड्राफ्ट सुविधा।",
      mr: "शून्य शिल्लक बँक खाते, RuPay डेबिट कार्ड, ₹2 लाख अपघात विमा, आणि ₹10,000 पर्यंत ओव्हरड्राफ्ट सुविधा.",
      ta: "பூஜ்ஜிய இருப்பு வங்கிக் கணக்கு, RuPay டெபிட் கார்டு, ₹2 லட்சம் விபத்து காப்பீடு, மற்றும் ₹10,000 வரை அதிகப்படி எடுப்பு வசதி.",
    },
    benefits: {
      en: "Zero-balance account + RuPay card + ₹2 lakh accident insurance + ₹10,000 overdraft + ₹30,000 life cover",
      hi: "शून्य बैलेंस खाता + RuPay कार्ड + ₹2 लाख दुर्घटना बीमा + ₹10,000 ओवरड्राफ्ट + ₹30,000 जीवन बीमा",
      mr: "शून्य शिल्लक खाते + RuPay कार्ड + ₹2 लाख अपघात विमा + ₹10,000 ओव्हरड्राफ्ट + ₹30,000 जीवन विमा",
      ta: "பூஜ்ஜிய இருப்பு கணக்கு + RuPay கார்டு + ₹2 லட்சம் விபத்து காப்பீடு + ₹10,000 அதிகப்படி எடுப்பு + ₹30,000 ஆயுள் காப்பீடு",
    },
    eligibility: {
      en: "Any Indian citizen aged 10+ who does not have a bank account",
      hi: "कोई भी 10+ वर्ष का भारतीय नागरिक जिसके पास बैंक खाता नहीं है",
      mr: "बँक खाते नसलेला 10+ वर्षे वयाचा कोणताही भारतीय नागरिक",
      ta: "வங்கிக் கணக்கு இல்லாத 10+ வயதுடைய எந்த இந்திய குடிமகனும்",
    },
    checkEligibility: (profile) => {
      return profile.age >= 10;
    },
    documents: {
      en: [
        "Aadhaar Card (if available; simplifies KYC)",
        "If no Aadhaar: Voter ID / Driving License / PAN Card / NREGA Job Card / Letter from Gazetted Officer with photo",
        "Passport-size photograph (1 copy)",
        "Filled account opening form (available at bank)",
      ],
      hi: [
        "आधार कार्ड (यदि उपलब्ध; KYC सरल करता है)",
        "आधार न हो तो: वोटर ID / ड्राइविंग लाइसेंस / पैन कार्ड / नरेगा जॉब कार्ड / राजपत्रित अधिकारी का फोटो सहित पत्र",
        "पासपोर्ट साइज़ फोटो (1 प्रति)",
        "भरा हुआ खाता खोलने का फॉर्म (बैंक में उपलब्ध)",
      ],
      mr: [
        "आधार कार्ड (उपलब्ध असल्यास; KYC सोपे करते)",
        "आधार नसल्यास: मतदार ओळखपत्र / ड्रायव्हिंग लायसन्स / पॅन कार्ड / नरेगा जॉब कार्ड / राजपत्रित अधिकाऱ्याचे फोटोसह पत्र",
        "पासपोर्ट साइज फोटो (1 प्रत)",
        "भरलेला खाते उघडण्याचा अर्ज (बँकेत उपलब्ध)",
      ],
      ta: [
        "ஆதார் அட்டை (கிடைத்தால்; KYC-ஐ எளிதாக்குகிறது)",
        "ஆதார் இல்லையென்றால்: வாக்காளர் அட்டை / ஓட்டுநர் உரிமம் / பான் அட்டை / நரேகா வேலை அட்டை / அரசு அதிகாரி புகைப்படத்துடன் கூடிய கடிதம்",
        "பாஸ்போர்ட் அளவு புகைப்படம் (1 பிரதி)",
        "கணக்கு திறக்கும் படிவம் (வங்கியில் கிடைக்கும்)",
      ],
    },
    office: {
      en: "Any nationalized bank / Regional Rural Bank / Post Office",
      hi: "कोई भी राष्ट्रीयकृत बैंक / क्षेत्रीय ग्रामीण बैंक / डाकघर",
      mr: "कोणतीही राष्ट्रीयीकृत बँक / प्रादेशिक ग्रामीण बँक / टपाल कार्यालय",
      ta: "ஏதேனும் தேசியமயமாக்கப்பட்ட வங்கி / பிராந்திய கிராமப்புற வங்கி / தபால் நிலையம்",
    },
  },
];
