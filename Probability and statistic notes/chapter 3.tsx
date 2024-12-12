import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const ProbabilityDetailedSolutions = () => {
  const [selectedProblem, setSelectedProblem] = useState(1);

  const singleDieProblem = {
    steps: [
      {
        title: "Define Sample Space",
        content: (
          <div className="space-y-2">
            <div>S = {1,2,3,4,5,6}</div>
            <div className="grid grid-cols-6 gap-2">
              {[1,2,3,4,5,6].map(num => (
                <div key={num} className="p-3 border rounded-lg text-center">
                  {num}
                </div>
              ))}
            </div>
          </div>
        )
      },
      {
        title: "a) Multiple of 3",
        content: (
          <div className="space-y-2">
            <div>Find n(A): Count multiples of 3</div>
            <div className="grid grid-cols-6 gap-2">
              {[1,2,3,4,5,6].map(num => (
                <div key={num} 
                  className={`p-3 border rounded-lg text-center 
                    ${[3,6].includes(num) ? 'bg-blue-100 font-bold' : ''}`}>
                  {num}
                </div>
              ))}
            </div>
            <div>P(A) = n(A)/n(S) = 2/6 = 1/3</div>
          </div>
        )
      },
      {
        title: "b) Less than 5",
        content: (
          <div className="space-y-2">
            <div>Find n(B): Count numbers less than 5</div>
            <div className="grid grid-cols-6 gap-2">
              {[1,2,3,4,5,6].map(num => (
                <div key={num} 
                  className={`p-3 border rounded-lg text-center 
                    ${num < 5 ? 'bg-green-100 font-bold' : ''}`}>
                  {num}
                </div>
              ))}
            </div>
            <div>P(B) = n(B)/n(S) = 4/6 = 2/3</div>
          </div>
        )
      }
    ]
  };

  const twoDiceProblem = {
    steps: [
      {
        title: "Define Sample Space",
        content: (
          <div className="space-y-2">
            <div>Total outcomes = 6 × 6 = 36</div>
            <div className="grid grid-cols-6 gap-1 text-sm">
              {[1,2,3,4,5,6].map(die1 => (
                [1,2,3,4,5,6].map(die2 => (
                  <div key={`${die1}-${die2}`} 
                    className="p-2 border text-center">
                    {die1},{die2}
                  </div>
                ))
              ))}
            </div>
          </div>
        )
      },
      {
        title: "a) Sum equals 3",
        content: (
          <div className="space-y-2">
            <div>Find pairs where sum = 3</div>
            <div className="grid grid-cols-6 gap-1 text-sm">
              {[1,2,3,4,5,6].map(die1 => (
                [1,2,3,4,5,6].map(die2 => (
                  <div key={`${die1}-${die2}`} 
                    className={`p-2 border text-center
                      ${die1 + die2 === 3 ? 'bg-purple-100 font-bold' : ''}`}>
                    {die1},{die2}
                  </div>
                ))
              ))}
            </div>
            <div>P(sum = 3) = n(A)/n(S) = 2/36 = 1/18</div>
          </div>
        )
      }
    ]
  };

  const physBioProblem = {
    steps: [
      {
        title: "Given Information",
        content: (
          <div className="space-y-2">
            <div>Total students: 30</div>
            <div>Physics students: 20</div>
            <div>Biology students: 21</div>
          </div>
        )
      },
      {
        title: "Venn Diagram",
        content: (
          <div className="relative h-48 mb-4">
            <div className="absolute w-40 h-40 bg-blue-100 rounded-full left-12 top-4 flex items-center justify-center">
              Physics (20)
            </div>
            <div className="absolute w-40 h-40 bg-green-100 rounded-full right-12 top-4 flex items-center justify-center opacity-80">
              Biology (21)
            </div>
            <div className="absolute w-20 h-20 bg-purple-100 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
              x
            </div>
          </div>
        )
      },
      {
        title: "Solution Steps",
        content: (
          <div className="space-y-2">
            <div>1. Using inclusion-exclusion principle:</div>
            <div>Total = Physics + Biology - Both</div>
            <div>30 = 20 + 21 - x</div>
            <div>x = 11 students in both</div>
            <div className="font-bold mt-2">
              P(both) = 11/30
            </div>
          </div>
        )
      }
    ]
  };

  const problems = {
    1: singleDieProblem,
    2: twoDiceProblem,
    3: physBioProblem
  };

  return (
    <div className="space-y-6">
      <div className="flex gap-2 mb-4">
        {Object.keys(problems).map(num => (
          <button
            key={num}
            onClick={() => setSelectedProblem(Number(num))}
            className={`px-4 py-2 rounded ${
              selectedProblem === Number(num) 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-100'
            }`}
          >
            Problem {num}
          </button>
        ))}
      </div>

      <Card className="w-full">
        <CardHeader>
          <CardTitle>Problem {selectedProblem} Solution Steps</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {problems[selectedProblem].steps.map((step, idx) => (
              <div key={idx} className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-bold mb-2">{step.title}</h3>
                {step.content}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProbabilityDetailedSolutions;
