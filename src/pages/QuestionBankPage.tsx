import React, { useState, useEffect } from 'react';
import { styled, keyframes } from 'styled-components';
import TopicContainer from '../components/TopicContainer';
import { CueCardData, AnalysisData } from '../types';
import { initialPart1Data } from '../data/part1';
import { initialPart2Data } from '../data/part2';

interface QuestionBankPageProps {
    navigateTo: (page: 'home') => void;
    navigateToAnalysis: (card: CueCardData) => void;
    handleAddWord: (word: string) => void;
    cleanWord: (text: string) => string | null;
}

interface TopicModalProps {
    card: CueCardData;
    onClose: () => void;
    navigateToAnalysis: (card: CueCardData) => void;
    handleAddWord: (word: string) => void;
    cleanWord: (text: string) => string | null;
}

// --- Start of components copied from AnalysisPage.tsx ---
const CopyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
);
const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
    </svg>
);
const AddIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>;
const AnalysisIcon = ({ type }: { type: AnalysisData['type'] }) => {
    const icons: { [key in AnalysisData['type']]: React.ReactElement } = {
        vocab: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>,
        phrase: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-3-3-4-6-4S1 2 1 5v8c0 7 4 8 7 8Z" /><path d="M21 21c-3 0-7-1-7-8V5c0-3 3-4 6-4s5 1 5 4v8c0 7-4 8-7 8Z" /></svg>,
        sentence: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" /></svg>,
    };
    return <AnalysisIconWrapper type={type}>{icons[type]}</AnalysisIconWrapper>;
}
function escapeRegExp(string: string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

const AnalyzedText: React.FC<{ answer: string | string[]; analysis: AnalysisData[] }> = ({ answer, analysis }) => {
    if (!analysis || analysis.length === 0) {
        const answerText = Array.isArray(answer) ? answer.join('<br/><br/>') : answer;
        return <AnalyzedAnswerContainer dangerouslySetInnerHTML={{ __html: answerText }} />;
    }

    const analysisMap = new Map<string, AnalysisData>();
    analysis.forEach(item => analysisMap.set(item.text, item));

    const renderParagraph = (paragraph: string) => {
        const regex = new RegExp(`(${analysis.map(item => escapeRegExp(item.text)).join('|')})`, 'g');
        const parts = paragraph.split(regex).filter(part => part);
        
        return parts.map((part, index) => {
            const analysisItem = analysisMap.get(part);
            if (analysisItem) {
                return <Highlight key={index} type={analysisItem.type}>{part}</Highlight>;
            }
            return <span key={index}>{part}</span>;
        });
    };
    
    const finalAnswer = Array.isArray(answer) ? answer.join('<br/><br/>') : answer;
    return (
        <AnalyzedAnswerContainer>
            {finalAnswer.split(/<br\/?>/g).map((line, i) => (
                <p key={i}>{renderParagraph(line)}</p>
            ))}
        </AnalyzedAnswerContainer>
    );
};
const AnalysisDetailCard: React.FC<{ item: AnalysisData; handleAddWord: (word: string) => void; cleanWord: (text: string) => string | null; }> = ({ item, handleAddWord, cleanWord }) => {
    const handleAddClick = () => {
        const wordToAdd = cleanWord(item.text);
        if (wordToAdd) {
            handleAddWord(wordToAdd);
        }
    };
    return (
        <AnalysisCardWrapper type={item.type}>
            <AnalysisCardHeader>
                <AnalysisIcon type={item.type} />
                <AnalysisCardText>{item.text}</AnalysisCardText>
                {item.type === 'vocab' && <AddButton onClick={handleAddClick} aria-label={`添加单词 ${item.text}`}><AddIcon /></AddButton>}
            </AnalysisCardHeader>
            <AnalysisCardExplanation>{item.explanation}</AnalysisCardExplanation>
        </AnalysisCardWrapper>
    );
};
// --- End of components copied from AnalysisPage.tsx ---

const BackArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="19" y1="12" x2="5" y2="12" />
        <polyline points="12 19 5 12 12 5" />
    </svg>
);
const HelmIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="3" />
        <line x1="12" y1="2" x2="12" y2="5" />
        <line x1="12" y1="19" x2="12" y2="22" />
        <line x1="2" y1="12" x2="5" y2="12" />
        <line x1="19" y1="12" x2="22" y2="12" />
        <line x1="4.93" y1="4.93" x2="7.05" y2="7.05" />
        <line x1="16.95" y1="16.95" x2="19.07" y2="19.07" />
        <line x1="4.93" y1="19.07" x2="7.05" y2="16.95" />
        <line x1="16.95" y1="7.05" x2="19.07" y2="4.93" />
    </svg>
);
const PrevIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>;
const NextIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>;


const TopicModal: React.FC<TopicModalProps> = ({ card, onClose, navigateToAnalysis, handleAddWord, cleanWord }) => {
    // Hooks for both Part 1 and Part 2/3 must be at the top level.
    const [currentView, setCurrentView] = useState<'part2' | 'part3'>('part2');
    const [showAnswersView, setShowAnswersView] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedScore, setSelectedScore] = useState('6.5');
    const [copyStatus, setCopyStatus] = useState<'idle' | 'copied'>('idle');

    // Effect to reset internal state when the card prop changes
    useEffect(() => {
        setCurrentView('part2');
        setShowAnswersView(false);
    }, [card.id]);

    useEffect(() => {
        setCopyStatus('idle');
    }, [currentIndex, selectedScore, showAnswersView]);

    const handleModalContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const isPart2Card = !!card.part2Title;
    const hasSampleAnswers = card.sampleAnswers && card.sampleAnswers.length > 0;
    const currentQA = hasSampleAnswers ? card.sampleAnswers![currentIndex] : null;

    // Part 1 Answer View logic
    const totalAnswers = card.part1Questions?.length ?? 0;
    const handleNext = () => {
        if (currentIndex < totalAnswers - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };
    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    // Effect for Part 1 logic - must have an internal condition
    useEffect(() => {
        if (!isPart2Card && currentQA) {
            const currentQAScores = currentQA.versions.map(v => v.score);
            if (!currentQAScores.includes(selectedScore)) {
                const sortedScores = [...currentQAScores].sort((a,b) => parseFloat(b) - parseFloat(a));
                setSelectedScore(sortedScores[0] || '6.5');
            }
        }
    }, [isPart2Card, currentIndex, currentQA, selectedScore]);
    
    // Part 2+3 Card Layout
    if (isPart2Card) {
        const handleAnalysisClick = () => {
            if (card.sampleAnswers && card.sampleAnswers.length > 0) {
                onClose();
                navigateToAnalysis(card);
            }
        };
        return (
            <ModalOverlay onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title-p2">
                 <ModalContainerP2 onClick={handleModalContentClick}>
                     <HeaderP2>
                        <BackButtonP2 
                            onClick={currentView === 'part2' ? onClose : () => setCurrentView('part2')} 
                            aria-label={currentView === 'part2' ? "返回" : "返回 Part 2"}
                        >
                            <BackArrowIcon />
                        </BackButtonP2>
                        <h3>{currentView === 'part2' ? 'P2 题卡' : 'P3 题卡'}</h3>
                        <RefreshButtonP2 aria-label="刷新"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 4v6h-6" /><path d="M1 20v-6h6" /><path d="M3.51 9a9 9 0 0 1 14.85-3.36L20.5 10a5 5 0 0 0-7.82 5.42L11 17.5" /></svg></RefreshButtonP2>
                     </HeaderP2>
                     <ContentP2>
                        <CardWrapper>
                             <Sidebar>
                                <HelmIcon />
                                <DateText>【2025年 9-12月】</DateText>
                             </Sidebar>
                             <MainContent>
                                {card.status === 'New' && <NewTag>新题</NewTag>}
                                <CardTitle id="modal-title-p2">{card.title}</CardTitle>
                                {currentView === 'part2' && (
                                    <PartSection>
                                        <PartLabel>Part 2</PartLabel>
                                        <Part2Title>{card.part2Title}</Part2Title>
                                        <p><strong>{card.part2Description}</strong></p>
                                        <Part2Prompts>
                                            {card.part2Prompts?.map((prompt, i) => <li key={i}>{prompt}</li>)}
                                        </Part2Prompts>
                                    </PartSection>
                                )}
                                {currentView === 'part3' && (
                                    <PartSection>
                                        <PartLabel>Part 3</PartLabel>
                                        <Part3Questions>
                                             {card.part3Questions?.map((q, i) => <li key={i}>{q}</li>)}
                                        </Part3Questions>
                                    </PartSection>
                                )}
                             </MainContent>
                        </CardWrapper>
                     </ContentP2>
                     <FooterP2>
                        <PrevNextNav>
                             <button disabled><PrevIcon /> 上一题</button>
                             <button disabled>下一题 <NextIcon /></button>
                        </PrevNextNav>
                         <MainActions>
                             <ActionButtonOrange onClick={handleAnalysisClick}>参考答案</ActionButtonOrange>
                             {currentView === 'part2' ? (
                                <ActionButtonBlue onClick={() => setCurrentView('part3')}>查看 Part 3 问题</ActionButtonBlue>
                             ) : (
                                <ActionButtonBlue>立即练习</ActionButtonBlue>
                             )}
                         </MainActions>
                         <SupplementaryAction>我要补充</SupplementaryAction>
                     </FooterP2>
                 </ModalContainerP2>
            </ModalOverlay>
        );
    }

    // --- RESTRUCTURED Part 1 Card Logic ---
    // FIX: Explicitly set the type for `new Set` to `string` to ensure correct type inference for `availableScores`.
    const availableScores: string[] = hasSampleAnswers
        ? [...new Set<string>(card.sampleAnswers!.flatMap(qa => qa.versions.map(v => v.score)))]
            .sort((a, b) => parseFloat(a) - parseFloat(b))
        : [];

    const handleShowAnswers = (score: string) => {
        setSelectedScore(score);
        setCurrentIndex(0);
        setShowAnswersView(true);
    };

    // View 2: Detailed Answers
    const currentVersion = currentQA?.versions?.find(v => v.score === selectedScore);

    const handleCopy = () => {
        if (!currentQA || !currentVersion) return;
    
        const questionText = `${currentIndex + 1}. ${currentQA.question}`;
        
        let answerText = '';
        if (Array.isArray(currentVersion.answer)) {
            answerText = currentVersion.answer.join('\n\n');
        } else {
            // Split by double <br> tags, trim each paragraph, and join with a single blank line.
            // This corrects the issue of multiple newlines being generated from <br/><br/> and
            // cleans up extra whitespace from the source template literals.
            const paragraphs = currentVersion.answer.split(/<br\s*\/?>\s*<br\s*\/?>/gi);
            answerText = paragraphs.map(p => p.replace(/<\/?[^>]+(>|$)/g, "").trim()).join('\n\n');
        }
    
        const textToCopy = `**${questionText}**\n\n${answerText}`;
    
        navigator.clipboard.writeText(textToCopy).then(() => {
            setCopyStatus('copied');
            setTimeout(() => setCopyStatus('idle'), 2000);
        }).catch(err => {
            console.error("Could not copy text: ", err);
        });
    };

    // View 1: Question List
    if (!showAnswersView) {
        return (
            <ModalOverlay onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title-p1">
                <ModalContainerP1 onClick={handleModalContentClick}>
                    <ModalHeaderP1>
                        <div className="modal-header-content">
                            <ModalHeaderTag>【2025年 9-12月】</ModalHeaderTag>
                            <h2 id="modal-title-p1">{card.title}</h2>
                        </div>
                        {card.status === 'New' && <ModalNewTagP1>新题</ModalNewTagP1>}
                        <ModalCloseButtonP1 onClick={onClose} aria-label="关闭">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                        </ModalCloseButtonP1>
                    </ModalHeaderP1>
                    <ModalContentP1>
                        <QuestionsSectionP1>
                            <h3>问题列表</h3>
                            <ol>
                                {card.part1Questions?.map((q, index) => <li key={index}>{q}</li>)}
                            </ol>
                        </QuestionsSectionP1>

                        {hasSampleAnswers && availableScores.length > 0 && (
                            <ScoreNavContainer>
                                <h4>点击分数查看范文解析</h4>
                                <ScoreNavButtons>
                                    {availableScores.map(score => (
                                        <ScoreNavButton key={score} onClick={() => handleShowAnswers(score)}>
                                            {score}分 范文
                                        </ScoreNavButton>
                                    ))}
                                </ScoreNavButtons>
                            </ScoreNavContainer>
                        )}
                    </ModalContentP1>
                    <ModalFooterP1>
                        <SupplementaryAction>我要补充</SupplementaryAction>
                    </ModalFooterP1>
                </ModalContainerP1>
            </ModalOverlay>
        );
    }

    return (
        <ModalOverlay onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title-p1">
            <ModalContainerP1 onClick={handleModalContentClick}>
                <ModalHeaderP1>
                    <ModalBackButtonP1 onClick={() => setShowAnswersView(false)} aria-label="返回问题列表">
                         <BackArrowIcon />
                    </ModalBackButtonP1>
                    <div className="modal-header-content">
                         <ModalHeaderTag>【2025年 9-12月】</ModalHeaderTag>
                         <h2 id="modal-title-p1">{card.title}</h2>
                    </div>
                     {card.status === 'New' && <ModalNewTagP1>新题</ModalNewTagP1>}
                    <ModalCloseButtonP1 onClick={onClose} aria-label="关闭">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                    </ModalCloseButtonP1>
                </ModalHeaderP1>
                <ModalContentP1>
                    {hasSampleAnswers && currentQA ? (
                         <AnswerContent key={`${currentIndex}-${selectedScore}`}>
                            <AnswerHeader>
                                <AnswerQuestion>{currentIndex + 1}. {currentQA.question}</AnswerQuestion>
                                <CopyButton onClick={handleCopy} disabled={copyStatus === 'copied'} aria-label="复制范文">
                                    {copyStatus === 'copied' ? (
                                        <>
                                            <CheckIcon />
                                            <span>已复制</span>
                                        </>
                                    ) : (
                                        <>
                                            <CopyIcon />
                                            <span>复制</span>
                                        </>
                                    )}
                                </CopyButton>
                            </AnswerHeader>

                             <ScoreSelector>
                                 {availableScores.map(score => (
                                     <ScoreButton key={score} $active={score === selectedScore} onClick={() => setSelectedScore(score)}>
                                         {score}分
                                     </ScoreButton>
                                 ))}
                             </ScoreSelector>

                             {currentVersion ? (
                                <>
                                    <AnalyzedText answer={currentVersion.answer} analysis={currentVersion.analysis || []} />
                                    {currentVersion.analysis && currentVersion.analysis.length > 0 && (
                                        <AnalysisDetailsGrid>
                                            {currentVersion.analysis.map((item, idx) => (
                                                <AnalysisDetailCard key={idx} item={item} handleAddWord={handleAddWord} cleanWord={cleanWord}/>
                                            ))}
                                        </AnalysisDetailsGrid>
                                    )}
                                </>
                             ) : (
                                <p>暂无此分数段范文。</p>
                             )}

                             {totalAnswers > 1 && (
                                <NavigationControls>
                                    <ModalNavButton onClick={handlePrev} disabled={currentIndex === 0}>
                                        上一题
                                    </ModalNavButton>
                                    <ProgressIndicator>
                                        {currentIndex + 1} / {totalAnswers}
                                    </ProgressIndicator>
                                    <ModalNavButton onClick={handleNext} disabled={currentIndex === totalAnswers - 1}>
                                        下一题
                                    </ModalNavButton>
                                </NavigationControls>
                            )}
                         </AnswerContent>
                    ) : (
                        <p style={{ marginTop: '1rem', color: '#8899a6' }}>暂无范文解析。</p>
                    )}
                </ModalContentP1>
                 <ModalFooterP1>
                    <SupplementaryAction>我要补充</SupplementaryAction>
                </ModalFooterP1>
            </ModalContainerP1>
        </ModalOverlay>
    );
};

const QuestionBankPage: React.FC<QuestionBankPageProps> = ({ navigateTo, navigateToAnalysis, handleAddWord, cleanWord }) => {
    const [activePage, setActivePage] = useState<'part1' | 'part2'>('part1');
    const [selectedCard, setSelectedCard] = useState<CueCardData | null>(null);

    const handleCardClick = (card: CueCardData) => {
        setSelectedCard(card);
    };

    const handleCloseModal = () => {
        setSelectedCard(null);
    };

    return (
        <>
            <Header>
                <HeaderBackButton onClick={() => navigateTo('home')} aria-label="返回主页">
                    <BackArrowIcon />
                    <span>返回</span>
                </HeaderBackButton>
                <h1>雅思口语 2025 年 9-12 月题库</h1>
                <Nav>
                    <NavButton 
                        $active={activePage === 'part1'}
                        onClick={() => setActivePage('part1')}>
                        Part1
                    </NavButton>
                    <NavButton 
                        $active={activePage === 'part2'}
                        onClick={() => setActivePage('part2')}>
                        Part2+3
                    </NavButton>
                </Nav>
            </Header>

            <div id="page-part1" className={activePage === 'part1' ? '' : 'hidden'}>
                <TopicContainer 
                    key="part1" 
                    initialTopics={initialPart1Data} 
                    onCardClick={handleCardClick} 
                />
            </div>

            <div id="page-part2" className={activePage === 'part2' ? '' : 'hidden'}>
                <TopicContainer 
                    key="part2" 
                    initialTopics={initialPart2Data} 
                    onCardClick={handleCardClick} 
                />
            </div>

            {selectedCard && <TopicModal card={selectedCard} onClose={handleCloseModal} navigateToAnalysis={navigateToAnalysis} handleAddWord={handleAddWord} cleanWord={cleanWord} />}
        </>
    );
};

// --- GENERAL STYLED COMPONENTS ---
const fadeIn = keyframes`from { opacity: 0; } to { opacity: 1; }`;
const slideIn = keyframes`from { transform: translateY(-30px); opacity: 0; } to { transform: translateY(0); opacity: 1; }`;
const slideInMobile = keyframes`from { transform: translateY(100%); opacity: 0; } to { transform: translateY(0); opacity: 1; }`;

const Header = styled.header`
    text-align: center;
    margin-bottom: 3rem;
    position: relative;

    h1 {
        font-size: 2.5rem;
        font-weight: 700;
        color: ${({ theme }) => theme.colors.header};
        margin: 0 6rem; /* Avoids overlap with back button */
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        margin-bottom: 2rem;
        h1 {
            font-size: 1.5rem;
            margin: 0 3.5rem;
        }
    }
`;
const Nav = styled.nav`
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 1.5rem;
`;
const NavButton = styled.button<{ $active?: boolean }>`
    font-family: inherit;
    font-size: 1rem;
    font-weight: 600;
    padding: 0.75rem 1.5rem;
    border-radius: 9999px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    background-color: ${({ theme }) => theme.colors.cardBg};
    color: ${({ theme }) => theme.colors.label};
    cursor: pointer;
    transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;
    &:hover {
        background-color: ${({ theme }) => theme.colors.boxBg};
        color: ${({ theme }) => theme.colors.header};
    }
    ${({ $active, theme }) => $active && `
        background-color: ${theme.colors.header};
        color: white;
        border-color: ${theme.colors.header};
    `}
     @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding: 0.6rem 1.2rem;
        font-size: 0.9rem;
    }
`;
const BackButton = styled.button`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: ${({ theme }) => theme.colors.boxBg};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 9999px;
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.label};
    cursor: pointer;
    transition: all 0.2s ease;
    svg { width: 20px; height: 20px; }
    &:hover {
        background-color: ${({ theme }) => theme.colors.border};
        color: ${({ theme }) => theme.colors.header};
    }
`;
const HeaderBackButton = styled(BackButton)`
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding: 0.6rem;
        top: 0;
        transform: none;
        span { display: none; }
    }
`;
const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    animation: ${fadeIn} 0.3s ease;
`;

// --- PART 1 MODAL STYLES ---
const ModalContainerP1 = styled.div`
    background-color: #f0f3f8;
    border-radius: 24px;
    width: 90%;
    max-width: 800px;
    height: 90vh;
    max-height: 800px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    animation: ${slideIn} 0.3s ease-out;
    overflow: hidden;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 100%;
        max-width: 100vw;
        height: 100%;
        max-height: 100vh;
        border-radius: 0;
        animation: ${slideInMobile} 0.35s ease-out;
    }
`;
const ModalHeaderP1 = styled.header`
    background: linear-gradient(135deg, #4a90e2, #2e6ab8);
    color: white;
    padding: 1rem 1.5rem;
    display: flex;
    align-items: center;
    flex-shrink: 0;
    gap: 1rem;
    .modal-header-content {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        flex-grow: 1;
        min-width: 0; /* Prevents text overflow issues */
    }
    h2 {
        font-size: 1.75rem;
        font-weight: 700;
        margin: 0;
        line-height: 1.2;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding: 1rem;
        gap: 0.75rem;
        h2 { font-size: 1.25rem; }
    }
`;

const ModalBackButtonP1 = styled.button`
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    padding: 0.5rem;
    margin: -0.5rem;
    border-radius: 50%;
    transition: background-color 0.2s;
    opacity: 0.8;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    svg { 
        display: block; 
        width: 28px;
        height: 28px;
    }

    &:hover {
        background-color: rgba(255, 255, 255, 0.2);
        opacity: 1;
    }
`;

const ModalHeaderTag = styled.div`
    font-size: 0.8rem;
    font-weight: 500;
    opacity: 0.8;
`;
const ModalNewTagP1 = styled.span`
    background-color: ${({ theme }) => theme.colors.primaryOrange};
    color: white;
    font-size: 0.75rem;
    font-weight: 700;
    padding: 0.2rem 0.6rem;
    border-radius: 999px;
    align-self: flex-start;
    margin-left: auto;
    flex-shrink: 0;
`;
const ModalCloseButtonP1 = styled.button`
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    padding: 0.5rem;
    margin: -0.5rem;
    border-radius: 50%;
    transition: background-color 0.2s;
    opacity: 0.8;
    svg { display: block; }
    &:hover {
        background-color: rgba(255, 255, 255, 0.2);
        opacity: 1;
    }
`;
const ModalContentP1 = styled.main`
    padding: 1.5rem;
    overflow-y: auto;
    flex-grow: 1;
    background-color: ${({ theme }) => theme.colors.cardBg};
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding: 1rem;
    }
`;
const QuestionsSectionP1 = styled.section`
    h3 {
        margin: 0 0 1rem 0;
        font-size: 1.1rem;
        padding-left: 0.5rem;
        border-left: 4px solid ${({ theme }) => theme.colors.primaryBlue};
    }
    ol { margin: 0; padding-left: 1.5rem; }
    li { margin-bottom: 0.75rem; line-height: 1.6; color: ${({ theme }) => theme.colors.text}; }
`;
const ModalFooterP1 = styled.footer`
    padding: 0.75rem 1.5rem;
    border-top: 1px solid ${({ theme }) => theme.colors.border};
    flex-shrink: 0;
    background-color: #f0f3f8;
    text-align: center;
`;

// --- PART 2+3 MODAL STYLES ---
const ModalContainerP2 = styled.div`
  background: white;
  border-radius: 16px;
  width: 90%;
  max-width: 760px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  animation: ${slideIn} 0.3s ease-out;
  overflow: hidden;
`;
const HeaderP2 = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1.5rem;
  border-bottom: 1px solid #e1e8ed;
  h3 { margin: 0; font-size: 1.2rem; font-weight: 600; }
`;
const HeaderButton = styled.button`
  background: none; border: none; cursor: pointer; color: #5b7083; padding: 0.5rem;
  display: flex; align-items: center; justify-content: center;
  border-radius: 50%;
  &:hover { background-color: #e8f5fd; color: #1da1f2; }
  svg { width: 22px; height: 22px; }
`;
const BackButtonP2 = styled(HeaderButton)``;
const RefreshButtonP2 = styled(HeaderButton)``;
const ContentP2 = styled.main`
  flex-grow: 1; overflow-y: auto; padding: 1.5rem; background-color: #f5f8fa;
`;
const CardWrapper = styled.div`
  display: flex; gap: 1.5rem; background: white; border-radius: 16px; padding: 1.5rem; border: 1px solid #e1e8ed;
`;
const Sidebar = styled.div`
  background: #1da1f2; color: white; border-radius: 12px; padding: 1rem;
  display: flex; flex-direction: column; align-items: center; text-align: center;
`;
const DateText = styled.p`
  margin: 0.5rem 0 0 0; font-weight: 600; font-size: 0.8rem; writing-mode: vertical-rl; text-orientation: mixed;
`;
const MainContent = styled.div`
  flex-grow: 1; position: relative;
`;
const NewTag = styled.div`
  position: absolute; top: -2.5rem; right: -1.5rem;
  background-color: #ff9f43; color: white; padding: 0.3rem 1rem;
  font-size: 0.8rem; font-weight: 700; border-radius: 16px 0 0 16px;
`;
const CardTitle = styled.h2`
  margin: 0 0 1.5rem 0; font-size: 1.5rem;
`;
const PartSection = styled.section``;
const PartLabel = styled.div`
  font-weight: 700; color: #1da1f2; margin-bottom: 0.5rem;
`;
const Part2Title = styled.p`
  font-size: 1.1rem; font-weight: 600; margin: 0 0 1rem 0;
`;
const Part2Prompts = styled.ul`
  list-style: none; padding-left: 0; margin: 0;
  li { margin-bottom: 0.5rem; color: #5b7083;
    &::before { content: '•'; color: #1da1f2; margin-right: 0.5rem; }
  }
`;
const Part3Questions = styled.ol`
  padding-left: 1.25rem; margin: 0;
  li { margin-bottom: 0.75rem; }
`;
const FooterP2 = styled.footer`
  padding: 1rem 1.5rem; border-top: 1px solid #e1e8ed; display: flex;
  justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;
`;
const PrevNextNav = styled.div`
  display: flex; gap: 0.5rem;
  button {
    background: none; border: 1px solid #e1e8ed; border-radius: 99px;
    padding: 0.5rem 1rem; font-weight: 600; cursor: not-allowed;
    display: flex; align-items: center; gap: 0.25rem; color: #aab8c2;
  }
`;
const MainActions = styled.div`
  display: flex; gap: 1rem;
`;
const ActionButtonBase = styled.button`
  padding: 0.75rem 1.5rem; border: none; border-radius: 99px; font-size: 1rem;
  font-weight: 700; cursor: pointer; transition: opacity 0.2s;
  &:hover { opacity: 0.9; }
`;
const ActionButtonOrange = styled(ActionButtonBase)`
  background-color: #ff9f43; color: white;
`;
const ActionButtonBlue = styled(ActionButtonBase)`
  background-color: #1da1f2; color: white;
`;
const SupplementaryAction = styled.button`
  background: none; border: none; color: #1da1f2; font-weight: 600;
  cursor: pointer;
  &:hover { text-decoration: underline; }
`;

// --- STYLES FOR PART 1 MODAL (BOTH VIEWS) ---
const ScoreNavContainer = styled.div`
    margin-top: 2rem;
    padding-top: 1.5rem;
    border-top: 1px solid ${({ theme }) => theme.colors.border};
    text-align: center;
    h4 {
        margin: 0 0 1rem 0;
        font-size: 1.1rem;
        font-weight: 600;
        color: ${({ theme }) => theme.colors.label};
    }
`;
const ScoreNavButtons = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
`;
const ScoreNavButton = styled.button`
    background-color: ${({ theme }) => theme.colors.primaryOrange};
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 9999px;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.2s ease, transform 0.2s ease;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);

    &:hover {
        background-color: #e88f33;
        transform: translateY(-2px);
    }
`;
const AnswerContent = styled.div`
    animation: ${fadeIn} 0.4s ease-out;
`;
const AnswerHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 1rem;
`;
const CopyButton = styled.button`
    display: flex;
    align-items: center;
    gap: 0.4rem;
    background-color: ${({ theme }) => theme.colors.boxBg};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 9999px;
    padding: 0.3rem 0.8rem;
    font-size: 0.8rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.label};
    cursor: pointer;
    transition: all 0.2s ease;
    flex-shrink: 0;
    white-space: nowrap;

    svg {
        width: 16px;
        height: 16px;
    }

    &:hover:not(:disabled) {
        background-color: ${({ theme }) => theme.colors.border};
        color: ${({ theme }) => theme.colors.header};
    }

    &:disabled {
        cursor: default;
        color: ${({ theme }) => theme.colors.placeText};
        border-color: ${({ theme }) => theme.colors.placeBg};
        background-color: ${({ theme }) => theme.colors.placeBg};

        svg {
            color: ${({ theme }) => theme.colors.placeText};
        }
    }
`;
const QuestionsListP1 = styled.div`
  margin-bottom: 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  max-height: 200px;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.colors.bg};
`;
const QuestionItemP1 = styled.div<{ $active: boolean }>`
  padding: 0.75rem 1rem;
  cursor: pointer;
  font-size: 0.95rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ $active, theme }) => $active ? theme.colors.highlightBg : 'transparent'};
  color: ${({ $active, theme }) => $active ? theme.colors.primaryBlue : theme.colors.text};
  font-weight: ${({ $active }) => $active ? '600' : '400'};
  transition: background-color 0.2s;
  &:last-child { border-bottom: none; }
  &:hover { background-color: ${({ theme }) => theme.colors.highlightBg}; }
`;
const ScoreSelector = styled.div`
    display: flex; gap: 0.5rem; margin-bottom: 1.5rem; flex-wrap: wrap;
    border-top: 1px solid ${({ theme }) => theme.colors.border};
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    padding: 1rem 0;
`;
const ScoreButton = styled.button<{ $active: boolean }>`
    font-family: inherit; font-size: 0.9rem; font-weight: 600; padding: 0.5rem 1.2rem;
    border-radius: 9999px; border: 1px solid ${({ theme }) => theme.colors.border};
    background-color: ${({ theme, $active }) => $active ? theme.colors.primaryOrange : 'transparent'};
    color: ${({ theme, $active }) => $active ? 'white' : theme.colors.label};
    cursor: pointer; transition: all 0.2s ease;
    &:hover {
        border-color: ${({ theme, $active }) => $active ? theme.colors.primaryOrange : theme.colors.header};
        color: ${({ theme, $active }) => $active ? 'white' : theme.colors.header};
    }
`;

const AnswerQuestion = styled.p`
    font-weight: 600;
    color: ${({ theme }) => theme.colors.header};
    margin: 0;
    line-height: 1.5;
    flex-grow: 1;
`;

const NavigationControls = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

// FIX: Renamed NavButton to ModalNavButton to avoid redeclaration conflict.
const ModalNavButton = styled.button`
    background-color: ${({ theme }) => theme.colors.primaryBlue};
    color: white;
    border: none;
    padding: 0.6rem 1.2rem;
    border-radius: 9999px;
    font-weight: 600;
    font-size: 0.9rem;
    cursor: pointer;
    transition: background-color 0.2s ease, opacity 0.2s ease;

    &:hover:not(:disabled) {
        background-color: #3a7ac2;
    }

    &:disabled {
        background-color: ${({ theme }) => theme.colors.border};
        color: ${({ theme }) => theme.colors.label};
        cursor: not-allowed;
    }
`;

const ProgressIndicator = styled.div`
    font-weight: 600;
    color: ${({ theme }) => theme.colors.label};
    font-size: 1rem;
    font-variant-numeric: tabular-nums;
`;

const AnalyzedAnswerContainer = styled.div`
    line-height: 1.8; color: #34495e;
    p { margin: 0 0 1em 0; &:last-child { margin-bottom: 0; } }
`;
const Highlight = styled.span<{ type: AnalysisData['type'] }>`
    background-color: ${({ theme, type }) => theme.colors[`analysis${type.charAt(0).toUpperCase() + type.slice(1)}Bg` as keyof typeof theme.colors]};
    border-bottom: 2px solid ${({ theme, type }) => theme.colors[`analysis${type.charAt(0).toUpperCase() + type.slice(1)}` as keyof typeof theme.colors]};
    border-radius: 3px 3px 0 0; padding: 0.1em 0.2em; font-weight: 500;
`;
const AnalysisDetailsGrid = styled.div`
    display: flex; flex-direction: column; gap: 1rem; margin-top: 1.5rem;
    padding-top: 1.5rem; border-top: 1px solid ${({ theme }) => theme.colors.border};
`;
const AnalysisCardWrapper = styled.div<{ type: AnalysisData['type'] }>`
    background-color: ${({ theme }) => theme.colors.bg};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-left: 4px solid ${({ theme, type }) => theme.colors[`analysis${type.charAt(0).toUpperCase() + type.slice(1)}` as keyof typeof theme.colors]};
    border-radius: 8px; padding: 0.75rem 1rem;
`;
const AnalysisCardHeader = styled.div`
    display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem;
`;
const AnalysisIconWrapper = styled.div<{ type: AnalysisData['type'] }>`
    color: ${({ theme, type }) => theme.colors[`analysis${type.charAt(0).toUpperCase() + type.slice(1)}` as keyof typeof theme.colors]};
    svg { width: 20px; height: 20px; }
`;
const AnalysisCardText = styled.div`
    font-weight: 600; color: ${({ theme }) => theme.colors.header}; font-size: 1rem;
`;
const AnalysisCardExplanation = styled.div`
    font-size: 0.95rem; color: #34495e; line-height: 1.6; padding-left: calc(20px + 0.75rem);
`;
const AddButton = styled.button`
    background: transparent; border: none; cursor: pointer; margin-left: auto; padding: 0.25rem;
    border-radius: 50%; display: flex; align-items: center; justify-content: center;
    color: ${({ theme }) => theme.colors.label}; transition: background-color 0.2s ease, color 0.2s ease;
    &:hover { background-color: ${({ theme }) => theme.colors.highlightBg}; color: ${({ theme }) => theme.colors.primaryBlue}; }
    svg { width: 18px; height: 18px; }
`;

export default QuestionBankPage;