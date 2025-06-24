import React, { useState } from 'react';
import { Upload, FileText, AlertCircle } from 'lucide-react';
import Button from './Button';

const ReqIfViewerSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile?.name.endsWith('.reqif')) {
      setFile(droppedFile);
    } else {
      alert('Please upload a .reqif file');
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile?.name.endsWith('.reqif')) {
      setFile(selectedFile);
    } else {
      alert('Please upload a .reqif file');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the file upload and processing
    console.log('Processing file:', file?.name);
    console.log('Email:', email);
  };

  return (
    <section id="reqif-viewer" className="min-h-screen bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">ReqIF Viewer</h2>
          <p className="text-xl text-gray-300">
            Effortlessly view and manage your ReqIF content.
          </p>
        </div>

        <div className="bg-gray-800 rounded-lg p-8">
          <div
            className={`border-2 border-dashed rounded-lg p-12 mb-8 text-center cursor-pointer transition-colors ${
              isDragging ? 'border-purple-500 bg-gray-700' : 'border-gray-600 hover:border-gray-500'
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => document.getElementById('file-upload')?.click()}
          >
            <input
              type="file"
              id="file-upload"
              className="hidden"
              accept=".reqif"
              onChange={handleFileSelect}
            />
            <Upload className="w-16 h-16 mx-auto mb-4 text-gray-400" />
            <p className="text-lg mb-2">
              Click or Drag & Drop your files here
            </p>
            <p className="text-sm text-gray-400">
              Supported format: .reqif
            </p>
          </div>

          {file && (
            <div className="bg-gray-700 rounded p-4 mb-8 flex items-center">
              <FileText className="w-6 h-6 mr-3 text-purple-400" />
              <span className="flex-grow">{file.name}</span>
              <button
                onClick={() => setFile(null)}
                className="text-gray-400 hover:text-white"
              >
                ×
              </button>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                E-mail <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                required
              />
            </div>

            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-400">
                Have an account? <a href="#" className="text-purple-400 hover:text-purple-300">Sign in</a>
              </div>
              <Button
                variant="primary"
                size="lg"
                className="bg-purple-600 hover:bg-purple-700"
                onClick={handleSubmit}
              >
                Continue
              </Button>
            </div>
          </form>

          <div className="mt-8 p-4 bg-gray-700 rounded-lg flex items-start">
            <AlertCircle className="w-6 h-6 text-purple-400 mr-3 flex-shrink-0 mt-1" />
            <p className="text-sm text-gray-300">
              This viewer is powered by the open-source DoorScope project, providing a reliable way to view and manage ReqIF (Requirements Interchange Format) files. Perfect for requirements management and systems engineering workflows.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReqIfViewerSection;