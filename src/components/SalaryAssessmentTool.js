            </div>
          )}

          {/* No results */}
          {showResults && results.length === 0 && (
            <div className="text-center py-12 text-white">
              <p className="text-2xl font-semibold mb-4">No matching salary data found</p>
              <p className="text-slate-300">Try adjusting your job title or industry selection.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
