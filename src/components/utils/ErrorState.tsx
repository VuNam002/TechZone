import React from 'react';
import Header from '../layout/Header';

interface ErrorStateProps {
    error: string;
    onSearch: (term: string) => void;
    onRetry?: () => void;
}

export const ErrorState: React.FC<ErrorStateProps> = ({ error, onSearch, onRetry }) => {
    return (
        <div>
            <Header onSearch={onSearch} />
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <div className="mb-4 text-6xl">😕</div>
                    <div className="mb-4 text-xl text-red-500">{error}</div>
                    {onRetry && (
                        <button
                            onClick={onRetry}
                            className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                        >
                            Thử lại
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};