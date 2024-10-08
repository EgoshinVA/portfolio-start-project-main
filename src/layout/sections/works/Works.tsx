import React, {useState} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./Work";
import proj1 from '../../../assets/images/proj1.webp'
import proj2 from '../../../assets/images/proj2.webp'
import {TabMenu} from "./tabMenu/TabMenu";
import {Container} from "../../../components/Container";
import {S} from './Works_Styles';
import {AnimatePresence, motion} from "framer-motion"

const workData = [
    {
        image: proj1,
        title: 'Social Network',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        type: 'spa',
        id: 1
    },
    {
        image: proj2,
        title: 'Timer',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim',
        type: 'react',
        id: 2
    }
]

export type TabsStatusType = 'all' | 'landing' | 'react' | 'spa'
export type TabsItemsType = Array<{ title: string, status: TabsStatusType }>

const tabsItems: TabsItemsType = [
    {
        title: "ALL",
        status: 'all'
    },
    {
        title: "LANDING PAGE",
        status: 'landing'
    },
    {
        title: "REACT",
        status: 'react'
    },
    {
        title: "SPA",
        status: 'spa'
    },

]

export const Works: React.FC = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState<TabsStatusType>('all')

    const filteredWorks = workData.filter((work) =>
        currentFilterStatus === 'all' ? true : work.type === currentFilterStatus
    );

    function changeFilterStatus(value: TabsStatusType) {
        setCurrentFilterStatus(value)
    }

    return (
        <S.Works id={'works'}>
            <Container>
                <SectionTitle title='My Works'/>
                <TabMenu changeFilterStatus={changeFilterStatus} items={tabsItems}
                         currentFilterStatus={currentFilterStatus}/>
                <FlexWrapper justify={'space-between'} align={'flex-start'} wrap>
                    <AnimatePresence>
                        {filteredWorks.map((item) => <motion.div
                                style={{width: '400px', flexGrow: 1, maxWidth: '540px'}}
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                exit={{opacity: 0}}
                                key={item.id} layout
                            >
                                <Work key={item.id} image={item.image} title={item.title}
                                      text={item.text}/></motion.div>
                        )}

                    </AnimatePresence>
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};