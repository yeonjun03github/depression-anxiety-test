import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, BarChart3, AlertTriangle, Phone, AlertCircle } from 'lucide-react';

const DepressionAnxietyTest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 1,
      category: "우울",
      title: "아침에 일어나기",
      text: "지난 2주 동안, 평소보다 잠자리에서 일어나는 것이 힘들어서 늦잠을 자거나 하루 일과를 시작하기 어려웠던 날이 며칠이나 되었습니까?"
    },
    {
      id: 2,
      category: "우울",
      title: "식사 패턴의 변화",
      text: "지난 2주 동안, 평소 즐겨 먹던 음식에 대한 관심이 없어져서 식사를 거르거나, 반대로 스트레스로 인해 평소보다 훨씬 많이 먹은 날이 며칠이나 되었습니까?"
    },
    {
      id: 3,
      category: "우울",
      title: "사람들과의 만남 회피",
      text: "지난 2주 동안, 친구나 가족의 연락이나 만남 제안을 의도적으로 피하거나 거절한 날이 며칠이나 되었습니까?"
    },
    {
      id: 4,
      category: "우울",
      title: "일상 활동의 어려움",
      text: "지난 2주 동안, 평소 쉽게 할 수 있던 일들(업무, 집안일, 개인위생 등)을 하는 것이 힘들어서 미루거나 포기한 날이 며칠이나 되었습니까?"
    },
    {
      id: 5,
      category: "우울",
      title: "부정적 자기 대화",
      text: '지난 2주 동안, "나는 쓸모없다", "모든 게 내 탓이다", "난 아무것도 제대로 못한다"와 같은 생각이 반복적으로 든 날이 며칠이나 되었습니까?'
    },
    {
      id: 6,
      category: "우울",
      title: "즐거움의 상실",
      text: "지난 2주 동안, 평소 좋아하던 활동(취미, 운동, TV 시청, 게임 등)을 해도 전혀 즐겁지 않거나 재미없게 느껴진 날이 며칠이나 되었습니까?"
    },
    {
      id: 7,
      category: "우울",
      title: "피로감과 에너지 부족",
      text: "지난 2주 동안, 충분히 쉬었는데도 몸이 무겁고 피곤해서 간단한 일조차 하기 힘들었던 날이 며칠이나 되었습니까?"
    },
    {
      id: 8,
      category: "우울",
      title: "집중력 저하",
      text: "지난 2주 동안, 책을 읽거나 TV를 보거나 대화를 나눌 때 내용에 집중하지 못해서 같은 부분을 반복해서 보거나 들어야 했던 날이 며칠이나 되었습니까?"
    },
    {
      id: 9,
      category: "우울",
      title: "수면 패턴의 변화",
      text: "지난 2주 동안, 잠들기 어렵거나 자주 깨어나거나, 반대로 평소보다 훨씬 오래 잠을 잔 날이 며칠이나 되었습니까?"
    },
    {
      id: 10,
      category: "불안",
      title: "걱정의 통제 어려움",
      text: "지난 2주 동안, 여러 가지 일들에 대한 걱정이 머릿속을 떠나지 않아서 다른 일에 집중하기 어려웠던 날이 며칠이나 되었습니까?"
    },
    {
      id: 11,
      category: "불안",
      title: "신체적 긴장감",
      text: "지난 2주 동안, 특별한 이유 없이 어깨나 목이 뻣뻣하고, 주먹을 꽉 쥐거나 이를 악물고 있는 자신을 발견한 날이 며칠이나 되었습니까?"
    },
    {
      id: 12,
      category: "불안",
      title: "안절부절못함",
      text: "지난 2주 동안, 가만히 앉아있기 어려워서 계속 움직이거나 서성거리거나 다리를 떨었던 날이 며칠이나 되었습니까?"
    },
    {
      id: 13,
      category: "불안",
      title: "심장 두근거림",
      text: "지난 2주 동안, 운동을 하지 않았는데도 심장이 빨리 뛰거나 두근거려서 불편함을 느낀 날이 며칠이나 되었습니까?"
    },
    {
      id: 14,
      category: "불안",
      title: "호흡 관련 불편감",
      text: "지난 2주 동안, 숨이 막히는 듯한 느낌이나 충분히 숨을 쉬지 못하는 듯한 답답함을 경험한 날이 며칠이나 되었습니까?"
    },
    {
      id: 15,
      category: "불안",
      title: "예상치 못한 상황에 대한 두려움",
      text: '지난 2주 동안, "만약 ~한다면 어떡하지?"라는 생각 때문에 평소 하던 활동(외출, 사람 만나기, 새로운 시도 등)을 피한 날이 며칠이나 되었습니까?'
    },
    {
      id: 16,
      category: "불안",
      title: "짜증과 예민함",
      text: "지난 2주 동안, 평소보다 사소한 일에도 짜증이 나거나 화가 나서 다른 사람에게 날카롭게 말한 날이 며칠이나 되었습니까?"
    },
    {
      id: 17,
      category: "불안",
      title: "소화기 증상",
      text: "지난 2주 동안, 스트레스나 긴장으로 인해 속이 메스껍거나 소화가 안 되거나 배가 아픈 증상을 경험한 날이 며칠이나 되었습니까?"
    }
  ];

  const options = [
    { value: 0, label: "전혀 없었다", description: "0일" },
    { value: 1, label: "며칠간 있었다", description: "2-6일" },
    { value: 2, label: "절반 이상의 날들", description: "7-11일" },
    { value: 3, label: "거의 매일", description: "12-14일" }
  ];

  const handleAnswer = (value) => {
    setAnswers({ ...answers, [questions[currentQuestion].id]: value });
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScores = () => {
    const depressionQuestions = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const anxietyQuestions = [10, 11, 12, 13, 14, 15, 16, 17];
    const depressionScore = depressionQuestions.reduce((sum, id) => sum + (answers[id] || 0), 0);
    const anxietyScore = anxietyQuestions.reduce((sum, id) => sum + (answers[id] || 0), 0);
    return { depressionScore, anxietyScore };
  };

  const getScoreInterpretation = (score, type) => {
    if (type === 'depression') {
      if (score <= 4) return { level: '정상', color: 'text-green-600', bg: 'bg-green-50' };
      if (score <= 9) return { level: '경미한 우울', color: 'text-yellow-600', bg: 'bg-yellow-50' };
      if (score <= 14) return { level: '중등도 우울', color: 'text-orange-600', bg: 'bg-orange-50' };
      if (score <= 19) return { level: '중증 우울', color: 'text-red-600', bg: 'bg-red-50' };
      return { level: '매우 심한 우울', color: 'text-red-800', bg: 'bg-red-100' };
    } else {
      if (score <= 4) return { level: '정상', color: 'text-green-600', bg: 'bg-green-50' };
      if (score <= 9) return { level: '경미한 불안', color: 'text-yellow-600', bg: 'bg-yellow-50' };
      if (score <= 14) return { level: '중등도 불안', color: 'text-orange-600', bg: 'bg-orange-50' };
      return { level: '심한 불안', color: 'text-red-600', bg: 'bg-red-50' };
    }
  };

  const restart = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };

  if (showResults) {
    const { depressionScore, anxietyScore } = calculateScores();
    const depressionResult = getScoreInterpretation(depressionScore, 'depression');
    const anxietyResult = getScoreInterpretation(anxietyScore, 'anxiety');

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <BarChart3 className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-gray-800 mb-2">검사 결과</h1>
              <p className="text-gray-600">지난 2주간의 경험을 바탕으로 한 결과입니다</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className={`p-6 rounded-xl ${depressionResult.bg} border-2 border-opacity-20`}>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">우울 점수</h3>
                <div className="flex items-baseline mb-2">
                  <span className="text-4xl font-bold text-gray-800">{depressionScore}</span>
                  <span className="text-gray-600 ml-2">/ 27점</span>
                </div>
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${depressionResult.color} ${depressionResult.bg}`}>
                  {depressionResult.level}
                </div>
              </div>
              <div className={`p-6 rounded-xl ${anxietyResult.bg} border-2 border-opacity-20`}>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">불안 점수</h3>
                <div className="flex items-baseline mb-2">
                  <span className="text-4xl font-bold text-gray-800">{anxietyScore}</span>
                  <span className="text-gray-600 ml-2">/ 24점</span>
                </div>
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${anxietyResult.color} ${anxietyResult.bg}`}>
                  {anxietyResult.level}
                </div>
              </div>
            </div>
            {(depressionScore > 9 || anxietyScore > 9) && (
              <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-red-400 mt-1 mr-3" />
                  <div>
                    <h4 className="text-lg font-semibold text-red-800 mb-2">전문가 상담을 권합니다</h4>
                    <p className="text-red-700 mb-4">
                      검사 결과가 중등도 이상의 우울이나 불안 증상을 나타내고 있습니다. 
                      정신건강 전문가와의 상담을 통해 적절한 도움을 받으실 것을 권합니다.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-red-700">
                        <Phone className="w-4 h-4 mr-2" />
                        <span className="font-medium">자살예방상담전화: 109</span>
                      </div>
                      <div className="flex items-center text-red-700">
                        <Phone className="w-4 h-4 mr-2" />
                        <span className="font-medium">정신건강상담전화: 1577-0199</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
              <div className="flex items-start">
                <AlertCircle className="w-6 h-6 text-blue-400 mt-1 mr-3" />
                <div>
                  <h4 className="text-lg font-semibold text-blue-800 mb-2">중요 안내사항</h4>
                  <div className="text-blue-700 space-y-2">
                    <p>• 이 검사는 전문적인 진단을 대체할 수 없습니다.</p>
                    <p>• 자해나 자살에 대한 생각이 든다면 즉시 전문가의 도움을 받으시기 바랍니다.</p>
                    <p>• 정신건강의학과, 지역 정신건강복지센터, 학교/직장 상담센터에서 도움을 받을 수 있습니다.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <button
                onClick={restart}
                className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
              >
                다시 검사하기
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const currentQ = questions[currentQuestion];
  const isAnswered = answers[currentQ.id] !== undefined;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-indigo-600 text-white p-6">
            <h1 className="text-2xl font-bold mb-2">우울·불안 선별검사</h1>
            <p className="text-indigo-100">지난 2주간의 경험을 바탕으로 답변해주세요</p>
          </div>
          {/* Progress Bar */}
          <div className="bg-gray-200 h-2">
            <div 
              className="bg-indigo-600 h-2 transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          {/* Question */}
          <div className="p-8">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  currentQ.category === '우울' 
                    ? 'bg-blue-100 text-blue-800' 
                    : 'bg-purple-100 text-purple-800'
                }`}>
                  {currentQ.category}
                </span>
                <span className="text-sm text-gray-500">
                  {currentQuestion + 1} / {questions.length}
                </span>
              </div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">
                {currentQ.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {currentQ.text}
              </p>
            </div>
            {/* Options */}
            <div className="space-y-3 mb-8">
              {options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleAnswer(option.value)}
                  className={`w-full p-4 text-left rounded-xl border-2 transition-all ${
                    answers[currentQ.id] === option.value
                      ? 'border-indigo-500 bg-indigo-50 text-indigo-800'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">{option.label}</div>
                      <div className="text-sm text-gray-500">{option.description}</div>
                    </div>
                    <div className={`w-4 h-4 rounded-full border-2 ${
                      answers[currentQ.id] === option.value
                        ? 'border-indigo-500 bg-indigo-500'
                        : 'border-gray-300'
                    }`}>
                      {answers[currentQ.id] === option.value && (
                        <div className="w-2 h-2 bg-white rounded-full m-0.5" />
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
            {/* Navigation */}
            <div className="flex justify-between">
              <button
                onClick={prevQuestion}
                disabled={currentQuestion === 0}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${
                  currentQuestion === 0
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                }`}
              >
                <ChevronLeft className="w-5 h-5 mr-1" />
                이전
              </button>
              <button
                onClick={nextQuestion}
                disabled={!isAnswered}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${
                  !isAnswered
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-indigo-600 text-white hover:bg-indigo-700'
                }`}
              >
                {currentQuestion === questions.length - 1 ? '결과 보기' : '다음'}
                <ChevronRight className="w-5 h-5 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepressionAnxietyTest;
