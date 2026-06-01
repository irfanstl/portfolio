import React, { useState, useEffect } from 'react';
import { Image, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { staticGallery } from '../data/portfolioData';

export default function Gallery() {
  const [items] = useState(staticGallery);
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filters = ['All', 'Events', 'Achievements', 'Certificates', 'Workshops'];

  const filteredItems = activeFilter === 'All' 
    ? items 
    : items.filter(item => item.category.toLowerCase() === activeFilter.toLowerCase().replace('s', '')); 

  const openLightbox = (id) => {
    const idx = filteredItems.findIndex(item => item._id === id || item.id === id);
    setLightboxIndex(idx !== -1 ? idx : null);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <div className="tab-content">
      <h2 className="section-title">
        PROFESSIONAL GALLERY
      </h2>

      {/* Filter Buttons */}
      <div className="gallery-controls">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`gallery-filter-btn ${activeFilter === filter ? 'active' : ''}`}
            onClick={() => {
              setActiveFilter(filter);
              setLightboxIndex(null);
            }}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      {filteredItems.length === 0 ? (
        <div className="card" style={{ padding: '40px 16px', textAlign: 'center', color: 'var(--text-muted)', fontSize: '13px' }}>
          No gallery assets found in this category.
        </div>
      ) : (
        <div className="gallery-grid">
          {filteredItems.map((item) => (
            <div 
              className="gallery-item" 
              key={item._id || item.id}
              onClick={() => openLightbox(item._id || item.id)}
            >
              <img src={item.img} alt={item.title} className="gallery-img" />
              <div className="gallery-overlay">
                <span className="gallery-item-tag">{item.category}</span>
                <span className="gallery-item-title">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Lightbox / Carousel View */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div className="modal-overlay" onClick={() => setLightboxIndex(null)}>
          <button className="modal-close-btn" style={{ top: '24px', right: '24px' }} onClick={() => setLightboxIndex(null)}>
            <X size={14} />
          </button>

          {filteredItems.length > 1 && (
            <>
              <button 
                className="theme-toggle-btn" 
                style={{ position: 'absolute', left: '20px', borderRadius: '4px', width: '36px', height: '36px' }}
                onClick={handlePrev}
              >
                <ChevronLeft size={16} />
              </button>
              <button 
                className="theme-toggle-btn" 
                style={{ position: 'absolute', right: '20px', borderRadius: '4px', width: '36px', height: '36px' }}
                onClick={handleNext}
              >
                <ChevronRight size={16} />
              </button>
            </>
          )}

          <div className="modal-content lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={filteredItems[lightboxIndex].img} 
              alt={filteredItems[lightboxIndex].title} 
              className="lightbox-img"
            />
            
            <div className="lightbox-caption">
              <span className="gallery-item-tag" style={{ display: 'block', marginBottom: '4px' }}>
                {filteredItems[lightboxIndex].category}
              </span>
              <h3 className="lightbox-title">{filteredItems[lightboxIndex].title}</h3>
              <p className="lightbox-desc">{filteredItems[lightboxIndex].desc}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
