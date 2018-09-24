;(() => {
    const resources = [
        {
            resourceName: 'All Cancer Support Group',
            categories: ['Support Group'],
            info:
                'Second Tuesday of each month\n4:00 pm to 5:00 pm\nGeorgia Cancer Out-Patient Center\n1411 Laney Walker Blvd, First Floor, Meditation Room\n\nFor more information, contact Rachel Veal at 706-721-5221',
            mission: '',
            url: 'https://www.augusta.edu/cancer/community/support-groups.php',
            phone: '706-721-5221',
            address: '1411 Laney Walker Blvd, First Floor, Meditation Room',
            email: '',
            id: 0
        },
        {
            resourceName: 'Augusta Training Shop',
            categories: ['Disabilities', 'Employment'],
            info:
                'The program is designed to provide a controlled and protected work environment for individuals with restricted mental and physical capabilities. The program gives employees basic work experience and work adjustment. The work habits we teach are arriving at work on time, staying on the job, doing the job correctly, doing the job in a timely manner, using break time properly and appropriate co-worker and supervisor relationships.\n\nWe teach our employees brass and copper polishing, hand caning and rushing, furniture repair, stripping, hand sanding, refinishing and painting.Thanks to your support, our employees learn a marketable skill specializing in furniture restoration on a level to match their personal abilities and interests.\n\nThe quality services we offer give our employees a rich opportunity to partake in a dignified, meaningful life. By using Augusta Training Shop, you will reap rewards of immeasurable value and enable our employees to stretch their limits, build their confidence and make their dreams a reality.',
            mission:
                'The Augusta Training Shop, a non profit work center established in 1947, employs mentally and physically challenged adults ... with a purpose. Our talented employees are taught to repair, strip and refinish furniture, re-cane chairs and polish metals and learn to do their work independently.\n\nThe compassionate work, and quality workmanship, of the dedicated staff of the ATS is known throughout the community. By utilizing our services, you enable our mentally challenged employees a rich opportunity to partake in a dignified, meaningful life',
            url: 'https://www.augustatrainingshop.com/index',
            phone: '706-738-1358',
            address: '1704 Jenkins Street\nAugusta, Georgia 30904',
            email: '',
            id: 1
        },
        {
            resourceName: 'Blood Disorders/Bone Marrow Transplant Cancer Support Group',
            categories: ['Support Group'],
            info:
                'Third Wednesday of each month\n11:30 am to 1:00 pm\nGeorgia Cancer Out-Patient Center\n1411 Laney Walker Blvd, First Floor, Meditation Room\n\nThis group provides educational and emotional support to patients, families, friends and caregivers.\n\n',
            mission: '',
            url: 'https://www.augusta.edu/cancer/community/support-groups.php',
            phone: '706-721-1634',
            address: 'Georgia Cancer Out-Patient Center\n1411 Laney Walker Blvd, First Floor, Meditation Room',
            email: '',
            id: 2
        },
        {
            resourceName: 'Breast Cancer Support Group',
            categories: ['Support Group'],
            info:
                'Second Wednesday of each month\n4:00 pm to 5:00 pm\nGeorgia Cancer Out-Patient Center\n1411 Laney Walker Blvd., First Floor, Meditation Room\n\nThis group provides support for women and families affected by breast cancer.\n\nFor more information, please call Adrian Bullard at 706-721-0615.',
            mission: '',
            url: 'https://www.augusta.edu/cancer/community/support-groups.php',
            phone: '706-721-0615',
            address: 'Georgia Cancer Out-Patient Center\n1411 Laney Walker Blvd., First Floor, Meditation Room',
            email: '',
            id: 3
        },
        {
            resourceName: 'CMONA - Community Ministry of North Augusta, SC',
            categories: ['Low Income Support'],
            info:
                'Hours: Tuesday through Friday from 9:30 AM – 5:30 PM and Saturday from 9:30 AM – 4:00 PM\n\nAims include:\nMeet immediate physical needs.\nThis includes food and clothing, of course, plus we refer to several partnering agencies for emergency and transitional housing needs. Transportation is also often an immediate physical need. If one of our neighbors is ill and can’t afford medication, we will help with that need.\n\nMeet spiritual needs.\nIn partnership with local churches, CMONA offers a place where people can come to grips with their need to forgive and be forgiven, to love and be loved, to live in faith and not fear.  Part of the Forward in Faith campaign involves expanding our spiritual support by building close referral partnerships with trained Christian counselor.  Also, we plan to offer a mentor program where local churches and small groups can send members who are willing to pray with, listen to, and come alongside of an individual or family.\n\n\n\nMeet mental health needs.\nMany of those who live in poverty and unemployment are afflicted by mental health issues. This can be exacerbated when they cannot afford needed medication. CMONA helps by providing their prescription drugs and by referring them to our partners who can address these needs.\n\nMeet behavioral needs.\nSometimes the biggest issues our clients have are to learn basic life skills. In many cases, adults haven’t learned things many of us take for granted, like budgeting or how to succeed in a job interview. CMONA has resources who can offer things like employment coaching.\n\n\n\nMeet social needs.\nWith the stress of trying–and sometimes failing–to make ends meet, relationships often suffer. CMONA also provides help with improving social skills, as well as encouraging reconciliation with those who may have hurt or been hurt by our client.',
            mission:
                'Community Ministry of North Augusta (CMONA) is a faith-based 501 (c) (3) nonprofit organization committed to providing compassionate, holistic, and  Christ-centered assistance to low-income individuals and families—especially those in the Area Two School District in Aiken County, S.C.\n\nThese services include but are not limited to: comprehensive intake assessment, utility assistance, food pantry, personal care items, prescription assistance, life-skills training, spiritual support, and connecting to other social service providers to help with areas like overnight and transitional housing, rapid rehousing, WIC, vocational and educational enrichment, rental assistance, and eviction prevention.\n\nThe ministry is the only one of its kind that serves North Augusta, and was founded in 1984 with churches from six different denominations: Fairview Presbyterian, Grace United Methodist, Holy Trinity Lutheran Church, Our Lady of Peace Catholic Church, Saint Bartholomew Episcopal, and Second Providence Baptist Church.  At present day, Community Ministry is supported by 22 member churches as well as individuals, foundations, corporations, and small businesses from the local community and surrounding area.',
            url: 'http://cmona.org/',
            phone: '803-279-5771',
            address: '646 E. Buena Vista Avenue, North Augusta, SC 29841',
            email: '',
            id: 4
        },
        {
            resourceName: 'DCCM Food Pantry',
            categories: ['Food Assistance'],
            info:
                'DCCM Food Pantry is a multi-denominational coalition of 15 area churches that have combined resources to run a centrally located food pantry in the heart of downtown Augusta. We are located at 430 8th St. and conveniently located near several housing complexes and on Route 3 of the Augusta Public Transit system.\n\nSince 1978, DCCM has established itself as a consistent, reliable source of food for those in need.\n\n430 8th St. Augusta, GA 30901- Inside the Mead House of St. John UMC\nHours: Monday-Friday, 11 AM- 12:30, or until the first 75 clients are served',
            mission: '',
            url: 'http://www.dccmaugusta.org/',
            phone: '',
            address:
                '430 8th St.\n\nAugusta, Ga 30901\n\n(Near the corner of 8th and Telfair inside The Mead House of St. John)',
            email: 'Dccmaugusta@gmail.com',
            id: 5
        },
        {
            resourceName: 'Families Forward LLC',
            categories: ['Counseling'],
            info:
                'We are a psychology practice dedicated to helping children, adolescents, adults, and families manage life difficulties with our expertise and support. We understand and respect that therapy is an important commitment for you and your family, and we are dedicated to providing you with the best possible care. We accomplish this by delivering only the most current and supported treatments in an atmosphere that respects and cares for your family.',
            mission: '',
            url: 'http://www.familiesforward.co/',
            phone: '706-210-8855',
            address: '3506 Professional Circle Suite B, Martinez, GA 30907',
            email: 'admin@familiesforward.co',
            id: 6
        },
        {
            resourceName: 'Family Counseling Center of the CSRA',
            categories: ['Counseling'],
            info:
                'The Family Counseling Center is a private, non-profit, non-sectarian agency that provides professional counseling services to retired and active service members and residents of the CSRA regardless of their ability to pay.  The Family Counseling Center (FCC) was founded in 1979 by a group of concerned citizens, organized by the United Way of the CSRA, who recognized the need for professional counseling services to serve members of the community who could not afford private mental health care and did not qualify for services provided by state agencies.  ',
            mission:
                '"To strengthen the abilities of individuals and families to achieve their goals and to network with other agencies and institutions to improve family life."',
            url: 'http://www.fcccsra.org',
            phone: '706-868-5011',
            address: '3351 Wrightsboro Road; Suite 301\n​Augusta, GA 30909',
            email: '',
            id: 7
        },
        {
            resourceName: 'Georgia Poison Center',
            categories: ['Medical'],
            info:
                'The Georgia Poison Center (GPC) is a 24-hour poison emergency information service as well as a poisoning education resource for health care professionals and residents of Georgia. Thousands of Georgians benefit each year from the Poison Center’s services.',
            mission:
                'The mission of the GPC is to provide high quality poison center services to healthcare professionals and residents of Georgia. The GPC goals are designed to sustain its commitment to offer high quality services to Georgians, while meeting AAPCC standards: Provision of 24-hour-a-day prompt and accurate poison information to those accessing our services, Education of Georgia residents in the areas of poison prevention and first aid, Education of healthcare professionals in the areas of clinical toxicology, poisoning epidemiology, poison prevention, toxicological diagnosis and care.',
            url: 'https://www.georgiapoisoncenter.org/',
            phone: '1-800-222-1222',
            address: '80 Jesse Hill Jr Dr SE\nPO Box 26066\nAtlanta, GA 30303',
            email: '',
            id: 8
        },
        {
            resourceName: 'Georgia Vocational Rehabilitation Agency',
            categories: ['Disabilities', 'Employment'],
            info:
                'The Georgia Vocational Rehabilitation Agency operates five integrated and interdependent statutory programs that share a primary goal - to help people with disabilities to become fully productive members of society by achieving independence and meaningful employment. The largest of the programs are Vocational Rehabilitation (VR) Program, Disability Adjudication Services, and Roosevelt Warm Springs/Cave Spring Center. Two other unique programs serve consumers with visual impairments: the Business Enterprise Program and Georgia Industries for the Blind.\n\nWe are committed to the principle that people with disabilities are assets, and our efforts emphasize eliminating attitudinal barriers as well as physical ones.\n\nWe are a strategic partner in helping to build a diverse, qualified and productive workforce. Our aim is to pursue a comprehensive, coordinated employment agenda.\n\nOur programs impact both employers and job seekers. Our bottom line is to tailor our services to fit your needs. And our promise to you is consistent professional service with responsive and responsible follow-up.',
            mission:
                'At the Georgia Vocational Rehabilitation Agency, it is about the people we serve. Our goal is to make Georgia the very best State in the Union for persons with disabilities regarding employment and independence.\n\nGVRA Mission: Employment and independence for Georgians with disabilities.\n\nGVRA Vision:  Every Georgian with a disability can work and live independently.',
            url: 'https://gvs.georgia.gov/',
            phone: '844-367-4872',
            address: '1220D West Wheeler Pkwy Augusta, GA 30909',
            email: '',
            id: 9
        },
        {
            resourceName: 'Gynecological Cancer Support Group',
            categories: ['Support Group'],
            info:
                'Third Monday of each month\n6:15 to 8:00 p.m.\nDaksha Chudgar Lydia House\n1369 Interstate Parkway\n\nFor more information, please contact Donna Wheatley at 706-721-5557.',
            mission: '',
            url: 'https://www.augusta.edu/cancer/community/support-groups.php',
            phone: '706-721-5557',
            address: 'Daksha Chudgar Lydia House\n1369 Interstate Parkway',
            email: '',
            id: 10
        },
        {
            resourceName: 'Hope House Augusta',
            categories: ['Substance Abuse', 'Mental Health'],
            info:
                'WHO:\nResidents – Hope House targets low-income and homeless women (18 and older) who have mental health disorders, including substance use disorders. These women may bring their minor children into treatment with them. Nearly 100% of these women have suffered some form of trauma or abuse.\n\nStaff – The staff at Hope House comprises mental health and addiction professionals, certified peers, as well as administrative and contract workers.\n\nWHAT:\nHope House provides residential and outpatient treatment programs and a long-term supportive housing facility for women. There are 42 separate apartments available. ',
            mission:
                'Hope House strives to instill self-sufficiency in individuals and families through comprehensive treatment to end the cycle of substance misuse, untreated mental illness, and poverty. Our organization strives to empower individuals through prevention education, clinical treatment, and recovery supports to create sustainable change. Hope House\'s ultimate goal is to help our individuals and families become self-sufficient as contributing members of society.',
            url: 'https://www.hopehouseaugusta.org',
            phone: '',
            address: '',
            email: '',
            id: 11
        },
        {
            resourceName: 'Lighthouse Care Center of Augusta',
            categories: ['Mental Health', 'Child & Adolescent'],
            info:
                'The Lighthouse Care Center of Augusta (LCCA) is a multi-discipline behavioral healthcare center that offers mental health services to the communities of surrounding Augusta, Georgia. We are focused on providing the highest quality treatment. The Lighthouse Care Center of Augusta is an acute and residential treatment facility providing balanced, top-notch clinical care. We provide a carefully-structured yet supportive environment.',
            mission:
                'To provide quality, behavioral health services in an ethical, cost effective, caring manner, thereby enriching the lives of children, their families, and the community.',
            url: 'http://www.lighthousecarecenters.com/',
            phone: '706-396-2901',
            address: '3100 Perimeter Parkway, Augusta, GA 30909',
            email: '',
            id: 12
        },
        {
            resourceName: 'Rape Crisis and Sexual Assault Services',
            categories: ['Abuse', 'Medical'],
            info:
                'Rape Crisis & Sexual Assault Services provides help at no cost for survivors of sexual assault and child sexual abuse and their families regardless of how long ago the abuse occurred and whether it was reported or not. Rape Crisis serves residents of over 13 counties, and provides direct services to all hospitals in Richmond, Burke, Columbia, Jefferson, and McDuffie Counties in Georgia. Services include 24 hour crisis line, advocacy, therapy and support groups, community education, prevention education, training for professionals, and referrals. ',
            mission:
                'Rape Crisis & Sexual Assault Services, through its staff and trained volunteer advocates, provides quality, efficient, and culturally competent crisis intervention, advocacy, therapy and prevention education to children, women, and men.',
            url: 'http://www.rapecrisisaugusta.org/home.html',
            phone: '706-724-5200',
            address: '1350 Walton Way, Augusta, GA',
            email: 'aealickhenry@uh.org',
            id: 13
        },
        {
            resourceName: 'Safe Homes of Augusta',
            categories: ['Abuse'],
            info:
                '24 HOUR CRISIS HOTLINE: 706.736.2499\n\n\nSafeHomes is much more than just a shelter.  In fact, some clients never even come into shelter, yet we are able to help them in other ways.  We offer highly-specialized and comprehensive services to assist victims of domestic violence regardless of where they are on their journey.\n\nAll of our services are completely free, completely confidential and the client\'s safety is always our first priority.\n\nOur Core Services Include:\n\n24-Hour Crisis Hotline\n30-Day Emergency Shelter\nLegal Advocacy\nSupport Groups\nCounseling\nLife Skills Classes\nParenting Classes\nResidential Aftercare\nRural County Outreach\nYouth Programs (Children and Teens)\nCommunity Education and Trainings\nOur 10-County Service Area Includes:\n\nBurke\nColumbia\nGlascock\nJefferson\nLincoln\nMcDuffie\nRichmond\nTaliaferro\nWarren\nWilkes',
            mission:
                'The mission of SafeHomes is to transform victims of domestic violence into survivors.\n\nWe believe that every person has the right to live without fear and that no one deserves to be abused. Through advocacy, we respect the intrinsic value of each client, regardless of where they are in their journey. Through education, we help end the cycle of violence, one family at a time. And through awareness, we empower our community to take a stand against domestic violence and support victims as they transform their lives into survivors.',
            url: 'http://www.safehomesdv.org/',
            phone: '706-736-2499',
            address: 'P.O. Box 3187\nAugusta, GA 30914',
            email: 'aimee@safehomesdv.org',
            id: 14
        },
        {
            resourceName: 'Salvation Army Corps Salvage and Rehabilitation Center',
            categories: ['Substance Abuse'],
            info:
                'For substance abuse rehab program for men. It involves counseling, work therapy, religious instruction and custom rehabilitation assistance at no cost. This program is a long-term residency program with 35 beds.',
            mission: '',
            url: 'http://www.salvationarmycars.com',
            phone: '706-826-7933',
            address: '1384 Greene St. Augusta, GA 30901',
            email: '',
            id: 15
        },
        {
            resourceName: 'Serenity Behavioral Health Systems',
            categories: ['Substance Abuse', 'Mental Health'],
            info:
                'Serenity Behavioral Health Systems provides assistance for people who suffer from a variety of mental illnesses, developmental disabilities, addiction issues, co-occurring disorders and other behavioral health needs. Services will include: Psychiatric assessments, Pharmacological management/monitoring and counseling.',
            mission:
                'Despite the numerous changes and challenges in the field of behavioral health over the years, we have continued to demonstrate dedication to serving the individuals in the community, with a mission to provide the highest quality care in a professional, responsive and caring manner. ',
            url: 'http://www.serenitybhs.com',
            phone: '706-432-4800',
            address: '3421 Mike Padgett Highway, Augusta GA 30906',
            email: '',
            id: 16
        },
        {
            resourceName: 'Soto ALG',
            categories: ['Disabilities'],
            info:
                'At Soto ALG, our mission is to provide support and health services to adults with special needs and their families in Augusta, GA. Our goal is to be a resource, helping families embrace a higher quality of life for their loved ones while creating a support network for every step of life.\n\nFrom events and helpful resources to staff with industry-leading knowledge, we\'re here to help your loved ones live their best life. Learn more about our full range of available services, and contact us with any questions.\n\nServices include: residential, day services, community living support, health services, and children services.',
            mission:
                'Soto ALG improves quality of life and promotes independence in the most vulnerable populations by providing supportive and health services delivered in an empowering, compassionate and family style environment.\n\nSoto ALG was founded in 2007 by Allan Soto as a family business to improve the lives of adults with special needs.  ',
            url: 'https://www.sotoalg.com/',
            phone: '706.426.4200',
            address: '3736 Executive Center Drive\nAugusta, GA 30907',
            email: '',
            id: 17
        },
        {
            resourceName: 'South Carolina Statewide Independent Living Council',
            categories: ['Disabilities'],
            info:
                'The South Carolina Statewide Independent Living Council (SILC) is a non-profit organization dedicated to promoting Independent Living for people with disabilities throughout the state. SILC members are appointed by the Governor of South Carolina. Federal regulations requires at least 51% of SILC members be people with significant disabilities. The South Carolina SILC believes that people with disabilities should:\n\nbe accepted, respected, valued members of society.\nhave equal opportunities to live, work and participate in their communities.\nbe expected to be productive, active and responsible citizens.\n\nThe core services are:\nInformation & Referral\nPeer Support\nIndependent Living Skills Training\nSystems and Individual Advocacy\nNursing Home & Youth Transition\nThrough these core services and others, CILs strive to empower and encourage people with disabilities to fully participate in their communities. Our intent is to allow any person with a disability to determine the path of their own life.',
            mission:
                'To promote inclusion in all aspects of life for South Carolinians with disabilities. The South Carolina Statewide Independent Living Council (SILC) promotes the independent living philosophy of consumer choice, peer support, self-help, self-determination, equal access, and individual and systems advocacy.',
            url: 'http://scsilc.com/',
            phone: '(803) 217-3209',
            address: '720 Gracern Road, Suite 106 Columbia, SC 29210',
            email: '',
            id: 18
        },
        {
            resourceName: 'Still Waters Professional Counseling Services, Inc.',
            categories: ['Counseling'],
            info:
                'Still Waters Professional Counseling Services, Inc. is a locally owned and operated CARF accredited behavioral health agency providing assessments and treatment for children and families who are experiencing difficulties related to behavioral, psychological or emotional challenges, addictions and/or loss. We offer in office and in-home, and community based services.',
            mission:
                'The mission of Still Waters Professional Counseling Services is to provide the highest quality of mental health services to individuals and families in need of counseling, crisis intervention, and prevention in the most appropriate, educational and accessible manner. ',
            url: 'http://www.stillcorp.com/',
            phone: '706-955-9224',
            address: '3711 Executive Center Drive Martinez, GA 30907',
            email: 'admin@stillcorp.com',
            id: 19
        },
        {
            resourceName: 'The Hale Foundation',
            categories: ['Substance Abuse'],
            info:
                'The Hale House Foundation Inc. is a transitional program to assist men over the age of 18 with substance abuse problems to recover in a safe recovery residence setting until they are ready to assume responsibility by readjusting to society and resume independent living. The Hale House offers programs without restrictions on the length of stay to accommodate individual recovery.',
            mission: '',
            url: 'http://thehalefoundation.com/',
            phone: '706-722-3060',
            address: '402 Walker Street Augusta, GA',
            email: 'crichards@thehalefoundation.com',
            id: 20
        },
        {
            resourceName: 'The South Carolina Commission for the Blind',
            categories: ['Health'],
            info:
                'Each year, the Commission for the Blind helps hundreds of men and women who are legally blind remain independent within their homes and communities. The commission accomplishes this goal by providing many valuable services, including orientation and mobility, home management, low vision evaluation and referral to resources within the community.\nThe success of the Commission for the Blind is attributed to our dedicated staff and the individuals served in the program. Since no two individuals are alike, we work with you to provide a personalized experience. Our staff works with you to ensure your concerns are addressed and a plan leading to social and economic independence is developed.\n\nThese services are provided through programs such as the:\n\nStudent Internship Program\nLow Vision Clinic\nSummer Teen Program\nAssistive Technology Program\n',
            mission:
                'Our mission is to provide quality individualized vocational rehabilitation services, independent living services and prevention-of-blindness services to blind and visually impaired consumers leading to competitive employment and social and economic independence.\n\nOur goal is to become a national model vocational rehabilitation agency for the blind, demonstrating quality services, accountability, innovation, effectiveness and efficiency.\n\nOur values guide all of our decisions and efforts.\n\nWe value the abilities, dignity and potential of the blind and visually impaired.\nWe value compassionate, professional and committed staff.\nWe value progressive, effective leadership.\nWe value human, fiscal and informational resources.\nWe value the support of the community, the General Assembly, the governor and the federal government.\nWe value employer partners who are receptive to training and employing our consumers.\nWe value collaboration with other training and community-based programs.\n',
            url: 'http://www.sccb.state.sc.us/',
            phone: '888.335.5951',
            address: '1430 Confederate Avenue\nColumbia, S.C. 29201',
            email: 'publicinfo@sccb.sc.gov',
            id: 21
        },
        {
            resourceName: 'Transitional Family Services',
            categories: ['Counseling'],
            info:
                'Types of Services:\n\nNon-Intensive Community Services: Formerly referred to as CORE services, these are an array of mental health services available for children (4 years and older), adolescents and adults with emotional and behavioral challenges. Services may be initiated by Parents, Department of Juvenile Justice (DJJ), Division of Family and Children Services (DFCS), School Counselors, Residential Facilities, Care Management Entity, Relatives, Community Partners etc. Through our diagnostic assessment, which is completed by a multidisciplinary team, a child’s level of care and immediate service needs are determined and they are matched with services that will help them achieve their treatment goals and may include:\n\nIndividual/Family Therapy: Provided to children, adolescents, adults and their families who may experience behavioral, emotional and/or substance abuse challenges.\n\nRelationship/Couples Therapy: Provided to couples in romantic relationship seeking to gain insights into their relationship, resolve conflict and improve overall relationship satisfaction.\n\nGroup Therapy: Curriculum-based specialized group counseling for youth and adolescents with behavioral, emotional and/or substance abuse problems.\n\nCommunity Support Services: Training, support and case-coordination to assist clients in gaining access to services and resources in their communities.\n\nPsychiatric Assessment/Medication Management: Provided by a Board Certified Psychiatrist with experience in child and adolescent mental health/substance abuse.\n\nPsychological/Psychiatric Evaluations: Psychological testing to determine the cause of psychological symptoms and disorders so that diagnosis and appropriate treatment courses may commence.\n\nNursing Assessments and Health Services: Health/Nursing assessments, monitoring and whole health services provided by nurses licensed by the State of Georgia.\n\nIntensive Family Intervention (IFI): This 90-day intensive treatment program couples a team of mental health professionals (one fully licensed team leader and two-three therapists/paraprofessionals) with a client/or family in need of specialized counseling and support services. The IFI service philosophy promotes a client/family focus to evaluate and diffuse crises, link client/family to community services & resources and simultaneously improve clients’ ability to self-regulate/manage while increasing caregivers’ ability to care for their child.',
            mission:
                ' Since 1993, Transitional Family Services’ mission has been to help individuals and families prosper by providing quality mental health services.   Our staff includes psychiatrists, a nurse, a psychologist, professional counselors, social workers, marriage and family therapists, and mental health professionals devoted to helping individuals and families suffering from psychiatric disorders and other mental health issues.  The professionals at TFS are educated in the treatment of psychiatric disorders including depression, anxiety, attention deficit disorder, oppositional defiant disorder,  physical or sexual trauma, marital and family issues and other mental health problems.',
            url: 'http://www.tfsga.org',
            phone: '706-364-1404',
            address: '3643 Walton Way Extensio, Building 4, Augusta, GA 30909',
            email: 'bernadette.vipond@pathways.com',
            id: 22
        },
        {
            resourceName: 'US TOO - Prostate Cancer Support Group',
            categories: ['Support Group'],
            info:
                '3rd Tuesday of each month\n7:00 pm to 8:00 pm\nGeorgia Cancer Out-Patient Center\n1411 Laney Walker Blvd,\nFirst Floor Community Conference Room\n\nFor more information call Naomi Williams at 706-721-0472\nor Nicole Aenchbacher at 706-721-4109.',
            mission: '',
            url: 'https://www.augusta.edu/cancer/community/support-groups.php',
            phone: '706-721-0472',
            address: '1411 Laney Walker Blvd,\nFirst Floor Community Conference Room',
            email: '',
            id: 23
        },
        {
            resourceName: 'Vocational Rehabilitation',
            categories: ['Disabilities', 'Employment'],
            info:
                'VR prepares and assists eligible South Carolinians with disabilities to achieve and maintain competitive employment. Our Quality One (Q1) initiative focuses on meeting the specific needs of our consumers and business partners. Our goal is to ensure that “quality happens one person at a time.” Through counseling, career guidance and vocational assessment, we help consumers identify their abilities and develop skills so that they are empowered to choose a career to be successful and independent. This includes strengthening our partnerships in schools and dedicating additional resources and support to students and young adults with disabilities who need pre-employment services to become career ready. If you have a disability, we can help you understand the options available in becoming or staying employed.\n\nIndividualized services are provided at offices all over the state and may include:\n\nAssessment for eligibility, career exploration and planning for employment;\n\nDisability management through therapies, treatments, procedures or assistive devices;\n\nTraining to enhance skills through instruction and work experiences in our offices, on worksites, or through educational partnerships;\n\nJob search to help you find competitive employment, and support you once you are on the job.',
            mission:
                'To prepare and assist eligible South Carolinians with disabilities to achieve and maintain competitive employment.',
            url: 'https://scvrd.net/',
            phone: '800-832-7526',
            address: '720 Gracern Road, Suite 106',
            email: '',
            id: 24
        },
        {
            resourceName: 'Walton Options for Independent Living',
            categories: ['Disabilities'],
            info:
                'Walton Options offers much more than simple services. Through the various programs and outreach we do, we:\n\nGuide persons with disabilities as they work towards new goals;\nTeach consumers how to utilize resources to enhance their independence;\nPromote the removal of attitudinal and architectural barriers;\nOffer real, impactful learning opportunities;\nHelp consumers achieve self-sufficiency through understanding benefits such as Social Security Insurance (SSI) and Social Security Disability Insurance (SSDI).\nPromote equal employment opportunities for individuals with disabilities, regardless of their disability through an Employment First position.',
            mission:
                'We believe all persons including those with disabilities, should be able to participate in their community. At Walton Options, we promote equality, inclusion and independence through Personal Choice, Personal Responsibility, Community Access, Education and Employment. Our goal is to help each person find and utilize the necessary, available resources on their personal journey to independence.\n\n',
            url: 'https://www.waltonoptions.org/',
            phone: '706-724-6262',
            address: '948 Walton Way\nAugusta, GA 30901',
            email: '',
            id: 25
        },
        {
            resourceName: 'Willingway',
            categories: ['Substance Abuse'],
            info:
                'Willingway is a nationally-recognized, privately-owned alcohol and drug addiction treatment program that practices evidence-based medicine to promote a continuing recovery program so that patients may enjoy a life of sobriety and success.',
            mission:
                'For 45 years, our mission has been to deliver to the highest quality of addiction treatment to patients and their families with dignity, compassion, and respect in order to restore the lives of those impacted by alcohol and drug abuse.',
            url: 'http://willingway.com',
            phone: '800-242-9455',
            address: '311 Jones Mill Rd., Statesboro, GA 30458',
            email: 'info@willingway.com',
            id: 26
        }
    ]

    const nonUniqueCategories = resources
        .map(r => r.categories)
        .reduce((acc, categoryTuple) => acc.concat(categoryTuple), [])
    const categories = [...new Set(nonUniqueCategories)].sort()

    const categoriesDiv = document.getElementById('categories')
    categories.forEach((category, i) => {
        categoriesDiv.innerHTML += `
            <span>
                <label>
                    <input type="checkbox" id="${i}">
                    ${category}
                </label>
            </span>
        `
    })

    const categoriesCheckboxes = document.querySelectorAll('#categories input[type="checkbox"]')
    categoriesCheckboxes.forEach(e => e.addEventListener('change', performSearch))

    const search = document.getElementById('search')
    search.value = '' // wipe out the search value to prevent the value from being cached by the broswer after a page refresh
    search.addEventListener('keyup', performSearch)

    const resultsDiv = document.getElementById('results')

    resultsDiv.addEventListener('click', e => {
        if (['button', 'h3'].indexOf(e.target.nodeName.toLowerCase()) > -1) {
            const div = event.target.parentElement.parentElement
            toggleResourceDivState(div)
        }
    })

    function performSearch() {
        const checkedCategoryNames = [...categoriesCheckboxes]
            .filter(checkbox => checkbox.checked)
            .map(checkbox => categories[checkbox.id])

        let results = resources
        if (checkedCategoryNames.length) {
            moveUpContentIfNecessary()

            results = results.filter(resource => {
                const categoryIntersection = resource.categories.filter(c => checkedCategoryNames.indexOf(c) > -1)
                return categoryIntersection.length
            })
        }

        const text = search.value.toLowerCase()
        if (text) {
            moveUpContentIfNecessary()

            results = results.filter(
                resource =>
                    JSON.stringify(resource)
                        .toLowerCase()
                        .indexOf(text) > -1
            )
        } else if (! text && ! checkedCategoryNames.length) {
            resultsDiv.innerHTML = ''
            return
        }

        displayResults(results)
    }

    function displayResults(results) {
        resultsDiv.innerHTML = ''
        results.forEach(displayCollapsedResource)
        const total = results.length
        resultsDiv.innerHTML = `<p id="total">${total} ${total == 1 ? 'result' : 'results'}</p>${resultsDiv.innerHTML}`
    }

    function displayCollapsedResource(r) {
        resultsDiv.innerHTML += `
            <div data-id="${r.id}" class="collapsed">
                <div class="title-and-button-wrapper">
                    <button>expand</button>
                    <h3>${r.resourceName}</h3>
                </div>
            </div
        `
    }

    function toggleResourceDivState(resourceDiv) {
        const resourceId = resourceDiv.dataset.id
        const resource = resources.find(r => r.id == resourceId)

        const toggleState = resourceDiv.className === 'collapsed' ? expand : collapse
        toggleState(resourceDiv, resource)
    }

    function collapse(div, r) {
        div.className = 'collapsed'
        div.innerHTML = `
            <div class="title-and-button-wrapper">
                <button>expand</button>
                <h3>${r.resourceName}</h3>
            </div>
        `
    }

    function expand(div, r) {
        div.className = 'expanded'
        div.innerHTML =
            `
            <div class="title-and-button-wrapper">
                <button>expand</button>
                <h3>${r.resourceName}</h3>
            </div>
            ` +
            (r.mission ? `<p><strong>Mission:</strong> ${r.mission}</p>` : '') +
            (r.info ? `<p><strong>Info:</strong> ${r.info}</p>` : '') +
            '<p>' +
            (r.url ? `<a href="${r.url}">Website</a>` : '') +
            (r.phone ? `<br><a href="tel:${r.phone}">${r.phone}</a>` : '') +
            (r.address
                ? `<br><a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(r.address)}">${
                    r.address
                }</a>`
                : '') +
            (r.email ? `<br><a href="mailto:${r.email}">${r.email}</a>` : '') +
            '</p>'
    }

    let hasFirstEventOccurred = false
    function moveUpContentIfNecessary() {
        if (! hasFirstEventOccurred) {
            hasFirstEventOccurred = true
            const h1 = document.querySelector('h1')
            h1.style.marginTop = '15px'
            setTimeout(() => {
                h1.style.transitionDuration = 'unset'
            }, 1000)
        }
    }
})()
