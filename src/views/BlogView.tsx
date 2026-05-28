/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { 
  Calendar, User, ArrowRight, Search, Tag, ChevronRight, Clock, Eye, Heart, Share2, 
  TrendingUp, Building2, Home, ShieldCheck, FileText, Award, MapPin, MessageSquare
} from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  image: string;
  views: number;
  tags: string[];
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "GIFT City Investment Outlook 2025: What Smart Investors Should Track",
    excerpt: "A global leader in real estate investment data, GIFT City provides a comprehensive view of the global real estate market. With a focus on data-driven insights...",
    content: "GIFT City has emerged as India's premier global financial gateway, showcasing high-growth potential and world-class smart infrastructure. This article provides deep insights into the investment opportunities available in this special economic zone...",
    date: "15 May 2026",
    author: "Prince Verma",
    category: "Investment",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800&q=80",
    views: 1240,
    tags: ["GIFT City", "Investment", "SEZ", "Real Estate"]
  },
  {
    id: 2,
    title: "Luxury Villa Buying Checklist for Athambad and Vithalnagar Corridors",
    excerpt: "A comprehensive guide to buying luxury villas in Athambad and Vithalnagar corridors, covering market trends, property types, and investment opportunities...",
    content: "When it comes to luxury villa investments, location is everything. This guide covers everything you need to know before making your purchase...",
    date: "10 May 2026",
    author: "Amit Sharma",
    category: "Buyers Guide",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
    views: 892,
    tags: ["Luxury Villas", "Buyers Guide", "Investment"]
  },
  {
    id: 3,
    title: "Property Legal Documents Explained: RERA, Title Chain, and Regulations",
    excerpt: "A detailed guide to property legal documents, including RERA, title chain searches, and regulation compliance, with practical examples...",
    content: "Understanding property legal documents is crucial for any real estate transaction. This article breaks down the most important documents you need to verify...",
    date: "5 May 2026",
    author: "Rajesh Gupta",
    category: "Legal Guide",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
    views: 1560,
    tags: ["Legal", "RERA", "Documentation"]
  },
  {
    id: 4,
    title: "Why Rohini Sector 32 is Delhi's Most Sought-After Residential Hub",
    excerpt: "Discover why Sector 32 in Rohini has become the premier destination for luxury builder floors and high-end residential properties...",
    content: "Sector 32, Rohini has emerged as one of North Delhi's most desirable residential locations. With wide roads, excellent connectivity, and premium properties...",
    date: "28 April 2026",
    author: "Neha Singh",
    category: "Locality Guide",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    views: 2100,
    tags: ["Rohini", "Locality Guide", "Residential"]
  },
  {
    id: 5,
    title: "Commercial Real Estate Trends in Dwarka Sector 19B",
    excerpt: "An in-depth analysis of commercial property trends, rental yields, and investment potential in Dwarka's busiest commercial hub...",
    content: "Dwarka Sector 19B has become a commercial hotspot with excellent footfall and connectivity. This article analyzes current market trends and future projections...",
    date: "20 April 2026",
    author: "Vikram Mehta",
    category: "Market Trends",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    views: 745,
    tags: ["Commercial", "Dwarka", "Market Trends"]
  },
  {
    id: 6,
    title: "Understanding RERA: A Home Buyer's Complete Guide",
    excerpt: "Everything you need to know about RERA registration, benefits for home buyers, and how to verify RERA numbers before purchasing...",
    content: "The Real Estate Regulatory Act (RERA) has transformed the Indian real estate landscape. This guide explains everything home buyers need to know...",
    date: "15 April 2026",
    author: "Sanjay Gupta",
    category: "Legal Guide",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
    views: 3200,
    tags: ["RERA", "Legal", "Home Buyers"]
  }
];

const CATEGORIES = ["All", "Investment", "Buyers Guide", "Legal Guide", "Locality Guide", "Market Trends"];

export default function BlogView() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  // Filter posts
  const filteredPosts = BLOG_POSTS.filter(post => {
    if (selectedCategory !== "All" && post.category !== selectedCategory) return false;
    if (searchQuery && !post.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  // Featured post (most views)
  const featuredPost = [...BLOG_POSTS].sort((a, b) => b.views - a.views)[0];

  return (
    <div className="space-y-12 pb-16 font-sans bg-[#FAFAFF]">
      
      {/* Hero Section */}
      <section className="relative h-[350px] md:h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1920&q=80"
            alt="Blog"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />
        </div>
        
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-white/70 text-sm mb-4">
              <span>Home</span>
              <ArrowRight className="h-3 w-3" />
              <span className="text-[#F17300]">Blogs</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
              Insights & Intelligence
            </h1>
            <p className="text-base text-gray-200 leading-relaxed max-w-2xl">
              Expert perspectives on real estate investment, legal compliance, market trends, 
              and property buying guides from industry leaders.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 text-sm border border-gray-200 rounded-xl bg-gray-50 focus:border-[#F17300] focus:ring-1 focus:ring-[#F17300] outline-none"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                    selectedCategory === category
                      ? 'bg-[#F17300] text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {!selectedPost && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-3xl overflow-hidden border border-orange-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="p-8 md:p-10 space-y-5">
                <span className="inline-block px-3 py-1 bg-[#F17300] text-white text-[10px] font-black uppercase tracking-wider rounded-full">
                  Featured Article
                </span>
                <h2 className="text-2xl md:text-3xl font-black text-[#1C1C1C] leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{featuredPost.date}</span>
                  <span className="flex items-center gap-1"><User className="h-3 w-3" />{featuredPost.author}</span>
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{featuredPost.readTime}</span>
                </div>
                <button
                  onClick={() => setSelectedPost(featuredPost)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#F17300] hover:bg-[#d66500] text-white font-bold text-sm rounded-full transition-all"
                >
                  Read Article <ArrowRight className="h-4 w-4" />
                </button>
              </div>
              <div className="h-full min-h-[250px]">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      {!selectedPost && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-black text-[#1C1C1C]">Latest Articles</h2>
            <p className="text-sm text-gray-500">Showing {filteredPosts.length} articles</p>
          </div>

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <article 
                  key={post.id}
                  className="bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all overflow-hidden group cursor-pointer"
                  onClick={() => setSelectedPost(post)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 px-2 py-1 bg-[#F17300]/90 backdrop-blur-sm text-white text-[9px] font-black uppercase rounded">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                      <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{post.date}</span>
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-[#1C1C1C] mb-2 line-clamp-2 group-hover:text-[#F17300] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-500 line-clamp-2 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400 flex items-center gap-1">
                        <Eye className="h-3 w-3" /> {post.views} views
                      </span>
                      <span className="text-[#F17300] text-sm font-semibold flex items-center gap-1">
                        Read More <ChevronRight className="h-3 w-3" />
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-gray-50 rounded-2xl">
              <Building2 className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-[#1C1C1C] mb-2">No Articles Found</h3>
              <p className="text-sm text-gray-500">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </section>
      )}

      {/* Single Post View */}
      {selectedPost && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => setSelectedPost(null)}
            className="flex items-center gap-2 text-[#F17300] font-semibold mb-6 hover:gap-3 transition-all"
          >
            <ChevronRight className="h-4 w-4 rotate-180" /> Back to all articles
          </button>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
            <img 
              src={selectedPost.image} 
              alt={selectedPost.title}
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="p-6 md:p-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-[#F17300]/10 text-[#F17300] text-[10px] font-black uppercase rounded-full">
                  {selectedPost.category}
                </span>
                <span className="text-xs text-gray-400 flex items-center gap-1">
                  <Calendar className="h-3 w-3" /> {selectedPost.date}
                </span>
                <span className="text-xs text-gray-400 flex items-center gap-1">
                  <User className="h-3 w-3" /> {selectedPost.author}
                </span>
                <span className="text-xs text-gray-400 flex items-center gap-1">
                  <Clock className="h-3 w-3" /> {selectedPost.readTime}
                </span>
                <span className="text-xs text-gray-400 flex items-center gap-1">
                  <Eye className="h-3 w-3" /> {selectedPost.views} views
                </span>
              </div>

              <h1 className="text-2xl md:text-3xl font-black text-[#1C1C1C] mb-4">
                {selectedPost.title}
              </h1>

              <div className="prose prose-sm max-w-none text-gray-600 leading-relaxed space-y-4">
                <p>{selectedPost.content}</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="flex flex-wrap gap-2">
                  {selectedPost.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-[#F17300]/10 flex items-center justify-center">
                    <User className="h-5 w-5 text-[#F17300]" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#1C1C1C]">{selectedPost.author}</p>
                    <p className="text-xs text-gray-400">Real Estate Expert</p>
                  </div>
                </div>
                <button className="flex items-center gap-2 text-gray-500 hover:text-[#F17300] transition-colors">
                  <Share2 className="h-4 w-4" /> Share
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Newsletter Section */}
      {!selectedPost && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1C1C1C] rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 h-64 w-64 bg-[#F17300]/20 rounded-full blur-3xl" />
            <div className="relative z-10">
              <MessageSquare className="h-12 w-12 text-[#F17300] mx-auto mb-4" />
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-gray-400 mb-6 max-w-md mx-auto">
                Get the latest real estate insights, investment tips, and market trends delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#F17300]"
                />
                <button className="px-6 py-3 rounded-xl bg-[#F17300] hover:bg-[#d66500] text-white font-bold text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

    </div>
  );
}