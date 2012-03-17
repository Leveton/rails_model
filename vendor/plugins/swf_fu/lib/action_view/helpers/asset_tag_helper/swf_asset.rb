module ActionView #:nodoc:

  # <tt>ActionView::Base.swf_default_options</tt> is a hash that
  # will be used to specify defaults in priority to the standard
  # defaults.
  class Base
    @@swf_default_options = {}
    cattr_accessor :swf_default_options
  end

  module Helpers # :nodoc:
    module AssetTagHelper
    
    def compute_public_path(source, dir, ext = nil, include_host = true, protocol = nil)
      
      
    end
      
      def swf_path(source)
        if defined? SwfTag
          SwfTag.new(self, @controller, source).public_path
        else
          compute_public_path(source, SwfAsset::DIRECTORY, SwfAsset::EXTENSION)
        end
      end
      alias_method :path_to_swf, :swf_path # aliased to avoid conflicts with a swf_path named route
      

  private
      module SwfAsset # :nodoc:
        DIRECTORY = 'swfs'.freeze
        EXTENSION = 'swf'.freeze

        def directory
          DIRECTORY
        end

        def extension
          EXTENSION
        end
      end
      
      # AssetTag is available since 2.1.1 (http://github.com/rails/rails/commit/900fd6eca9dd97d2341e89bcb27d7a82d62965bf )
      class SwfTag < AssetTag # :nodoc:
        include SwfAsset
      end if defined? AssetTag 
    end
  end
end
        
