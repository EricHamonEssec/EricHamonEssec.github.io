import React, { useState } from 'react';
import { Upload, FileText, AlertCircle, Zap } from 'lucide-react';
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
    console.log('Processing file:', file?.name);
    console.log('Email:', email);
  };

  return (
    <section id="reqif-viewer" className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Powered by DoorScope Open Source
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ReqIF Viewer
              <span className="text-purple-400"> & Analyzer</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Effortlessly view, analyze, and manage your ReqIF (Requirements Interchange Format) files 
              with our advanced viewer powered by open-source technology.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold mb-6">Upload Your ReqIF File</h3>
              
              <div
                className={`border-2 border-dashed rounded-xl p-12 mb-8 text-center cursor-pointer transition-all duration-300 ${
                  isDragging 
                    ? 'border-purple-500 bg-purple-500/10 scale-105' 
                    : 'border-gray-600 hover:border-gray-500 hover:bg-gray-700/50'
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
                <p className="text-lg mb-2 text-gray-300">
                  Click or drag & drop your ReqIF file here
                </p>
                <p className="text-sm text-gray-500">
                  Supported format: .reqif (up to 50MB)
                </p>
              </div>

              {file && (
                <div className="bg-gray-700 rounded-xl p-4 mb-8 flex items-center">
                  <FileText className="w-6 h-6 mr-3 text-purple-400" />
                  <span className="flex-grow text-gray-300">{file.name}</span>
                  <button
                    onClick={() => setFile(null)}
                    className="text-gray-400 hover:text-white text-xl"
                  >
                    ×
                  </button>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div className="flex justify-between items-center mb-6">
                  <div className="text-sm text-gray-400">
                    Have an account? <a href="#" className="text-purple-400 hover:text-purple-300">Sign in</a>
                  </div>
                  <Button
                    variant="primary"
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                    onClick={handleSubmit}
                  >
                    Analyze ReqIF
                  </Button>
                </div>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                <h3 className="text-xl font-bold mb-4 text-purple-400">Key Features</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-300">Interactive requirements visualization</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-300">Hierarchical structure navigation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-300">Advanced search and filtering</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-300">Export and sharing capabilities</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 rounded-2xl p-8 border border-purple-500/20">
                <div className="flex items-start">
                  <AlertCircle className="w-6 h-6 text-purple-400 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-purple-300 mb-2">Open Source Foundation</h4>
                    <p className="text-sm text-gray-300">
                      This viewer is built on the DoorScope open-source project, ensuring transparency, 
                      reliability, and community-driven improvements for requirements management workflows.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReqIfViewerSection;