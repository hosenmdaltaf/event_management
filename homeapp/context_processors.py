from homeapp.models import Gallery

def get_footer_img_to_context(request):
    footer_gallerys = Gallery.objects.all()[:6]
    # footer_gallerys = "This is footer data--------"
    return {
        'footer_gallerys': footer_gallerys,
    }
     