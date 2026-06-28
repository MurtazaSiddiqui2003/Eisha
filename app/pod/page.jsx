"use client"
import React, { useState } from 'react'
import './pod.css'


const POD = () => {
    const [selectedApparel, setSelectedApparel] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);

    const handleApparelChange = (e) => {
        setSelectedApparel(e.target.value);
        setSelectedFile(null);
        setPreviewUrl(null);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file);
            setPreviewUrl(URL.createObjectURL(file));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!selectedApparel || !selectedFile) {
            alert("Please select an apparel type and upload your artwork.");
            return;
        }
        alert(`Success! Ready to send ${selectedApparel} and artwork to backend.`);
    };

    return (
        <div className='custom-print-page'>
        <div className="studio-card">
            <h1 className="studio-title">Custom Print Studio</h1>
            <p className="studio-subtitle">
                Select your apparel item and upload your design for high-quality DTF printing.
            </p>

            <form onSubmit={handleSubmit} className="config-form">

                {/* STEP 1: Apparel Selection */}
                <div className="form-group">
                    <label className="form-label">1. Choose Apparel Piece</label>
                    <select
                        value={selectedApparel}
                        onChange={handleApparelChange}
                        className="custom-select"
                    >
                        <option value="">-- Select an Item --</option>
                        <option value="T-Shirt">Premium Heavyweight T-Shirt</option>
                        <option value="Hoodie">Oversized Luxury Hoodie</option>
                        <option value="Sweatshirt">Classic Crewneck Sweatshirt</option>
                    </select>
                </div>

                {/* STEP 2: Conditional File Upload Field */}
                {selectedApparel && (
                    <div className="form-group">
                        <label className="form-label">2. Upload Your Design / Photo</label>

                        <div className="upload-zone">
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="file-input"
                                required
                            />
                            <p className="upload-text-main">
                                {selectedFile ? selectedFile.name : "Click or drag to upload high-res image"}
                            </p>
                            <p className="upload-text-sub">PNG, JPG, or SVG for DTF output</p>
                        </div>

                        {/* Real-time image preview */}
                        {previewUrl && (
                            <div className="preview-box">
                                <p className="preview-title">Artwork Preview:</p>
                                <img
                                    src={previewUrl}
                                    alt="Upload Preview"
                                    className="preview-image"
                                />
                            </div>
                        )}
                    </div>
                )}

                {/* Action Button */}
                {selectedApparel && selectedFile && (
                    <button type="submit" className="submit-btn">
                        Confirm Design Settings
                    </button>
                )}

            </form>
        </div>
        </div>
    );
}

export default POD