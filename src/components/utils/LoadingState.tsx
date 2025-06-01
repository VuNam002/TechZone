import React from 'react';
import Header from '../layout/Header';

interface LoadingStateProps {
    onSearch: (term: string) => void;
}

export const LoadingState: React.FC<LoadingStateProps> = ({ onSearch }) => {
    return (
        <div>
            <Header onSearch={onSearch} />
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-4 border-b-2 border-blue-600 rounded-full animate-spin"></div>
                    <div className="text-xl text-gray-600">Đang tải...</div>
                </div>
            </div>
        </div>
    );
};